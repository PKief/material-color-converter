import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as chroma from 'chroma-js';
import IMask from 'imask';
import { Color, materialColors } from './colors';

interface ResultColor {
  hex: string;
  distance: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent implements OnInit {
  title = 'material-color-converter';
  colorForm: FormGroup;
  suggestedColors: ResultColor[] = [];
  selectedColor = '#ffffff';
  colorPalette: Color[][] = [];

  @ViewChild('container')
  container!: ElementRef;

  colorPatternMask!: IMask.MaskedDynamic;

  constructor(private cdr: ChangeDetectorRef) {
    const randomStartColor = this.getRandomColor();

    this.selectedColor = randomStartColor.hex;
    this.colorForm = new FormGroup({
      color: new FormControl(randomStartColor.hex, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.convert();
    this.generateColorPalette();

    this.colorPatternMask = IMask.createMask({
      mask: [
        {
          mask: 'RGB,RGB,RGB',
          blocks: {
            RGB: {
              mask: IMask.MaskedRange,
              from: 0,
              to: 255,
            },
          },
        },
        {
          mask: /^#[0-9a-f]{0,6}$/i,
        },
      ],
    });
  }

  /**
   * Get color value of the form for the color picker
   */
  getColorFormValue(): string | undefined {
    const color = this.colorForm.get('color')?.value;
    if (color && chroma.valid(color)) {
      return chroma(color).hex();
    }
    return undefined;
  }

  /**
   * If a color has been entered via the color picker store the value also in the input element
   */
  onChangeColorPicker(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.colorForm.get('color')?.setValue(color);
    this.convert();
  }

  /**
   * Convert the given color to a color of the Material Design color palette
   */
  convert(): void {
    if (this.colorForm.invalid) {
      return;
    }
    const { color } = this.colorForm.value;
    const distances = materialColors
      .map((matColor) => {
        return {
          distance: chroma.distance(matColor.hex, color),
          color: matColor.hex,
        };
      })
      .sort((a, b) => a.distance - b.distance);

    this.suggestedColors = [];

    // pick five colors with the lowest distance to the input color
    distances.slice(0, 5).forEach((distance) => {
      const suggestedColor = distance.color;
      this.suggestedColors.push({
        hex: suggestedColor,
        distance: distance.distance,
      });
    });
    this.cdr.detectChanges();
    this.updateBackground(color);
    this.generateColorPalette();

    this.selectedColor = this.suggestedColors[0].hex;
  }

  private getRandomColor() {
    return materialColors[Math.floor(Math.random() * materialColors.length)];
  }

  /**
   * Generate the color palette to show all colors of the Material Design Color Palette
   */
  private generateColorPalette(): void {
    // group colors by category (e.g. red or orange)
    const colorMap = materialColors.reduce<Record<string, Color[]>>(
      (result, color) => {
        (result[color.category] = result[color.category] || []).push(color);
        return result;
      },
      {}
    );

    // create two dimensional array for each category
    this.colorPalette = Object.keys(colorMap).reduce<Color[][]>(
      (result, key) => {
        result.push(colorMap[key]);
        return result;
      },
      []
    );
  }

  /**
   * Update background of the container with the color which was entered by the user
   */
  private updateBackground(inputColor: string): void {
    this.container.nativeElement.style.backgroundColor =
      chroma(inputColor).alpha(0.65);
  }
}
