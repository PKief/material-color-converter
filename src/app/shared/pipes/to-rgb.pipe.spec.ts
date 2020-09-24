import { ToRgbPipe } from './to-rgb.pipe';

describe('ToRgbPipe', () => {
  it('create an instance', () => {
    const pipe = new ToRgbPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform hex code to rgb color code', () => {
    const pipe = new ToRgbPipe();
    expect(pipe.transform('#ffffff')).toBe('rgb(255,255,255)');
  });
});
