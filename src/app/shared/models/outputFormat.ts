export interface OutputFormat {
  name: 'hex' | 'rgb' | 'hsl';
  active: boolean;
  transform: (color: string) => string;
}
