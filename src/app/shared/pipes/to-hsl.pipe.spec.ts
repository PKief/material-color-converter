import { ToHslPipe } from './to-hsl.pipe';

describe('ToHslPipe', () => {
  it('create an instance', () => {
    const pipe = new ToHslPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform hex code to hsl color code', () => {
    const pipe = new ToHslPipe();
    expect(pipe.transform('#ffffff')).toBe('hsl(0,0%,100%)');
  });
});
