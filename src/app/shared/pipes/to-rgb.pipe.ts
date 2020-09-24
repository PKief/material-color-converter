import { Pipe, PipeTransform } from '@angular/core';
import * as chroma from 'chroma-js';

@Pipe({
  name: 'toRgb',
})
export class ToRgbPipe implements PipeTransform {
  transform(hexCode: string): string {
    return chroma(hexCode).css();
  }
}
