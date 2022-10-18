export interface Color {
  category: string;
  hue?: string;
  hex: string;
}

export interface ResultColor {
  hex: string;
  distance: number;
}
