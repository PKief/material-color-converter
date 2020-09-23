import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as chroma from 'chroma-js';
import { materialColors } from './colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'material-color-converter';
  colorForm: FormGroup;
  resultColor: { hex: string; rgb: string; hsl: string };

  @ViewChild('container') container: ElementRef;

  ngOnInit(): void {
    this.colorForm = new FormGroup({
      color: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(3),
        this.validateCssColor,
      ]),
    });
  }

  convert(): void {
    const { color } = this.colorForm.value;
    const distances = materialColors
      .map((matColor) => {
        return {
          distance: chroma.distance(matColor, color),
          color: matColor,
        };
      })
      .sort((a, b) => a.distance - b.distance);

    const result = distances[0];
    this.resultColor = {
      hex: result.color,
      rgb: chroma(result.color).css(),
      hsl: chroma(result.color).css('hsl'),
    };
    this.container.nativeElement.style.backgroundColor = result.color;
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
}
