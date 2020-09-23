import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as chroma from 'chroma-js';
import { materialColors } from './colors';

interface ResultColor {
  hex: string;
  rgb: string;
  hsl: string;
  distance: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'material-color-converter';
  colorForm: FormGroup;
  resultColors: ResultColor[] = [];

  @ViewChild('container') container: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const randomStartColor =
      materialColors[Math.floor(Math.random() * materialColors.length)];
    this.colorForm = new FormGroup({
      color: new FormControl(randomStartColor, [
        Validators.required,
        this.validateCssColor,
      ]),
    });
  }

  ngAfterViewInit(): void {
    this.convert();
  }

  changeColorPicker(event): void {
    const color = event.srcElement.value;
    this.colorForm.get('color').setValue(color);
    this.convert();
  }

  convert(): void {
    if (this.colorForm.invalid) {
      return;
    }
    const { color } = this.colorForm.value;
    const distances = materialColors
      .map((matColor) => {
        return {
          distance: chroma.distance(matColor, color),
          color: matColor,
        };
      })
      .sort((a, b) => a.distance - b.distance);

    this.resultColors = [];
    distances.slice(0, 5).forEach((distance) => {
      const suggestedColor = distance.color;
      this.resultColors.push({
        hex: suggestedColor,
        rgb: chroma(suggestedColor).css(),
        hsl: chroma(suggestedColor).css('hsl'),
        distance: distance.distance,
      });
    });
    this.cdr.detectChanges();
    this.updateBackground(color, this.resultColors);
  }

  updateBackground(inputColor: string, resultColors: ResultColor[]): void {
    this.container.nativeElement.style.backgroundColor = chroma(
      inputColor
    ).alpha(0.65);
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

  getColorFormValue(): string {
    const color = this.colorForm.get('color').value;
    if (chroma.valid(color)) {
      return chroma(this.colorForm.get('color').value).hex();
    }
  }
}
