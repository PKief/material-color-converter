import { Component, Input, OnInit } from '@angular/core';
import { Color, materialColors } from '../colors';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit {
  @Input()
  selectedColor: string | undefined;

  colorPalette: Color[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateColorPalette();
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
}
