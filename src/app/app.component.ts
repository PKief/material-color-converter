import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { listAnimation } from '@shared/animations/list-animation';
import { ResultColor } from '@shared/models';
import { Observable } from 'rxjs';
import { getSuggestions } from 'svg-color-linter';
import { materialColors } from './colors';
import { ThemeService } from './core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [listAnimation],
})
export class AppComponent implements OnInit {
  suggestedColors: ResultColor[] = [];
  selectedColor: string | undefined;
  initialColor: string | undefined;
  appColorTheme$: Observable<string> | undefined;

  @ViewChild('container')
  container!: ElementRef;

  constructor(
    private cdr: ChangeDetectorRef,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.initialColor = this.getRandomColor().hex;
    this.convert(this.initialColor);
    this.appColorTheme$ = this.themeService.theme$;
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

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private getRandomColor() {
    return materialColors[Math.floor(Math.random() * materialColors.length)];
  }
}
