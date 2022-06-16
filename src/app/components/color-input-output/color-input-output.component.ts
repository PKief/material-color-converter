import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OutputFormat } from '@shared/models';
import * as chroma from 'chroma-js';

@Component({
  selector: 'app-color-input-output',
  templateUrl: './color-input-output.component.html',
  styleUrls: ['./color-input-output.component.scss'],
})
export class ColorInputOutputComponent implements OnInit {
  colorForm: FormGroup<{
    colorInput: FormControl<string | null>;
    colorOutput: FormControl<string | null>;
  }>;
  copiedToClipboard = false;
  supportedOutputFormats: OutputFormat[] = [
    {
      name: 'hex',
      active: true,
      transform: (color) => chroma(color).hex(),
    },
    {
      name: 'rgb',
      active: false,
      transform: (color) => chroma(color).css(),
    },
    {
      name: 'hsl',
      active: false,
      transform: (color) => chroma(color).css('hsl'),
    },
  ];

  @Input()
  initialColor: string | undefined;

  @Input()
  set selectedColor(value: string | undefined) {
    this._selectedColor = value;
    this.setOutput();
  }

  get selectedColor() {
    return this._selectedColor;
  }

  @Output()
  convert = new EventEmitter<string>();

  private _selectedColor: string | undefined;

  constructor() {
    this.colorForm = new FormGroup({
      colorInput: new FormControl<string>('', [
        Validators.required,
        this.validateCssColor,
      ]),
      colorOutput: new FormControl<string>(''),
    });
  }

  ngOnInit(): void {
    this.setInitialColor();
  }

  /**
   * If a color has been entered via the color picker store the value also in the input element
   */
  onChangeColorPicker(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.colorForm.get('colorInput')?.setValue(color);
    this.triggerConvert();
  }

  triggerConvert(): void {
    if (this.colorForm.valid && this.colorForm.value.colorInput) {
      this.convert.emit(this.colorForm.value.colorInput);
    }
  }

  /**
   * Get color value of the form for the color picker
   */
  getColorFormValue(): string | undefined {
    const color = this.colorForm.value.colorInput;
    if (color && chroma.valid(color)) {
      return chroma(color).hex();
    }
    return undefined;
  }

  switchColorOutputFormat() {
    const activeFormatIndex = this.supportedOutputFormats.findIndex(
      (f) => f.active
    );
    this.supportedOutputFormats = this.supportedOutputFormats.map((f) => {
      f.active = false;
      return f;
    });

    const nextFormatIndex =
      (activeFormatIndex + 1) % this.supportedOutputFormats.length;

    this.supportedOutputFormats[nextFormatIndex].active = true;
    this.setOutput();
  }

  private setInitialColor() {
    if (this.initialColor) {
      this.colorForm.get('colorInput')?.setValue(this.initialColor);
    }
  }

  private setOutput() {
    const color = this.selectedColor ?? '#FFFFFF';
    const activeFormatter = this.supportedOutputFormats.find(
      (f) => f.active
    )!.transform;
    this.colorForm.get('colorOutput')?.setValue(activeFormatter(color));
    this.copiedToClipboard = false;
  }

  /**
   * Validate the color code
   */
  private validateCssColor(
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
