import { materialColors } from '@/colors';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const getRandomColor = () => {
  return materialColors[Math.floor(Math.random() * materialColors.length)];
};

export const useSelectedColorStore = defineStore('selectedColor', () => {
  const selectedColor = ref('');
  const inputColor = ref(getRandomColor().hex);

  const updateSelectedColor = (color: string) => {
    selectedColor.value = color;
  };

  const updateInputColor = (color: string) => {
    inputColor.value = color;
  };

  return { inputColor, selectedColor, updateInputColor, updateSelectedColor };
});
