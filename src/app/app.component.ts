import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  resultColor: string;

  ngOnInit(): void {
    this.colorForm = new FormGroup({
      color: new FormControl(),
    });
  }

  convert(): void {
    const { color } = this.colorForm.value;
    // TODO: implement custom form validator
    if (this.validateHEXColorCode(color)) {
      const distances = materialColors
        .map((matColor) => {
          return {
            distance: chroma.distance(matColor, color),
            color: matColor,
          };
        })
        .sort((a, b) => a.distance - b.distance);

      const result = distances[0];
      this.resultColor = result.color;
    } else {
      alert('wrong color code. Must be HEX with prefixed # sign');
      this.resultColor = '';
    }
  }

  /**
   * Validate the HEX color code
   * @param color HEX code
   */
  validateHEXColorCode(color: string): boolean {
    const hexPattern = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    return color.length > 0 && hexPattern.test(color);
  }
}
