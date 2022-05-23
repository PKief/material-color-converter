import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as chroma from 'chroma-js';
import * as IMask from 'imask';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss'],
})
export class ColorInputComponent implements OnInit {
  colorForm: FormGroup;
  colorPatternMask!: IMask.MaskedDynamic;

  @Input()
  selectedColor: string | undefined;

  @Output()
  convert = new EventEmitter<string>();

  constructor() {
    this.colorForm = new FormGroup({
      color: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.setInputMask();
    this.setColor();
  }

  /**
   * If a color has been entered via the color picker store the value also in the input element
   */
  onChangeColorPicker(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.colorForm.get('color')?.setValue(color);
    this.triggerConvert();
  }

  triggerConvert(): void {
    if (this.colorForm.valid) {
      this.convert.emit(this.colorForm.value.color);
    }
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

  private setColor() {
    const color = this.selectedColor ?? '#FFFFFF';
    this.colorForm.get('color')?.setValue(color);
  }

  private setInputMask() {
    this.colorPatternMask = IMask.createMask({
      mask: [
        {
          mask: 'RGB,RGB,RGB',
          blocks: {
            RGB: {
              mask: IMask.MaskedRange,
              from: 0,
              to: 255,
            },
          },
        },
        {
          mask: /^#[0-9a-f]{0,6}$/i,
        },
      ],
    });
  }
}
