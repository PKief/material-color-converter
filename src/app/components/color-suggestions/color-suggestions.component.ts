import { Component, EventEmitter, Input, Output } from '@angular/core';
import { listAnimation } from '@shared/animations';
import { ResultColor } from '@shared/models';

@Component({
  selector: 'app-color-suggestions',
  templateUrl: './color-suggestions.component.html',
  styleUrls: ['./color-suggestions.component.scss'],
  animations: [listAnimation],
})
export class ColorSuggestionsComponent {
  @Input()
  suggestedColors: ResultColor[] = [];

  @Input()
  selectedColor: string | undefined;

  @Output()
  selectColor = new EventEmitter<string>();
}
