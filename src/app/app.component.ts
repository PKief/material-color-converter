import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getSuggestions } from 'svg-color-linter';
import { materialColors } from './colors';
import { listAnimation } from './shared/animations/list-animation';
import { ResultColor } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [listAnimation],
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
    this.selectedColor = this.suggestedColors[0].hex;
  }

  private getRandomColor() {
    return materialColors[Math.floor(Math.random() * materialColors.length)];
  }
}
