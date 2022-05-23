import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getSuggestions } from 'svg-color-linter';
import { materialColors } from './colors';

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
  suggestedColors: ResultColor[] = [];
  selectedColor: string | undefined;

  @ViewChild('container')
  container!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.selectedColor = this.getRandomColor().hex;
    this.convert(this.selectedColor);
  }

  /**
   * Convert the given color to a color of the Material Design color palette
   */
  convert(color: string): void {
    this.suggestedColors = getSuggestions(
      color,
      materialColors.map((c) => c.hex)
    );

    this.cdr.detectChanges();
    this.updateBackground(color);

    this.selectedColor = this.suggestedColors[0].hex;
  }

  private getRandomColor() {
    return materialColors[Math.floor(Math.random() * materialColors.length)];
  }

  /**
   * Update background of the container with the color which was entered by the user
   */
  private updateBackground(color: string): void {
    this.container.nativeElement.style.backgroundColor = color;
  }
}
