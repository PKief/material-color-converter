import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as chroma from 'chroma-js';
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

  constructor(private cdr: ChangeDetectorRef) {
    // either use a random color or value of query param
    const randomStartColor =
      materialColors[Math.floor(Math.random() * materialColors.length)];

    this.selectedColor = randomStartColor.hex;
    this.colorForm = new FormGroup({
      color: new FormControl(randomStartColor.hex, [
        Validators.required,
        this.validateCssColor,
      ]),
    });
  }

  ngOnInit(): void {
    this.convert();
    this.generateColorPalette();
  }

  /**
   * Generate the color palette to show all colors of the Material Design Color Palette
   */
  generateColorPalette(): void {
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

  /**
   * Update background of the container with the color which was entered by the user
   */
  updateBackground(inputColor: string): void {
    this.container.nativeElement.style.backgroundColor =
      chroma(inputColor).alpha(0.65);
  }

  /**
   * Validate the color code
   */
  validateCssColor(
    color: FormControl
  ): null | { validateCssColor: { valid: boolean } } {
    return chroma.valid(color.value)
      ? null
      : {
          validateCssColor: {
            valid: false,
          },
        };
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
}
