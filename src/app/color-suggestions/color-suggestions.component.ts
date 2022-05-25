import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultColor } from '../shared/models';

@Component({
  selector: 'app-color-suggestions',
  templateUrl: './color-suggestions.component.html',
  styleUrls: ['./color-suggestions.component.scss'],
})
export class ColorSuggestionsComponent {
  @Input()
  suggestedColors: ResultColor[] = [];

  @Input()
  selectedColor: string | undefined;

  @Output()
  selectColor = new EventEmitter<string>();
}
