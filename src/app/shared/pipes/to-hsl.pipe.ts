import { Pipe, PipeTransform } from '@angular/core';
import * as chroma from 'chroma-js';

@Pipe({
  name: 'toHsl',
})
export class ToHslPipe implements PipeTransform {
  transform(hexCode: string): string {
    return chroma(hexCode).css('hsl');
  }
}
