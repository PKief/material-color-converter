import { defineStore } from 'pinia';
import { ref } from 'vue';
import { materialColors } from '@/colors';
import type { Color } from '@/models';

const getRandomColor = () => {
  return materialColors[Math.floor(Math.random() * materialColors.length)];
};

export const useSelectedColorStore = defineStore('selectedColor', () => {
  const selectedColor = ref<Color | undefined>(undefined);
  const inputColor = ref(getRandomColor().hex);

  const getColor = (hex: string) => {
    return materialColors.find((color) => color.hex === hex);
  };

  const updateSelectedColor = (hex: string) => {
    const color = getColor(hex);
    if (color) {
      selectedColor.value = color;
    }
  };

  const updateInputColor = (hex: string) => {
    inputColor.value = hex;
  };

  return { inputColor, selectedColor, updateInputColor, updateSelectedColor };
});
