import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import type { ColorTheme } from '@/models';
import { getMediaPreference } from '@/themes';

export const useColorThemeStore = defineStore('colorTheme', () => {
  const theme = useTheme();
  const currentTheme = ref(getMediaPreference());

  const updateColorTheme = (colorTheme: ColorTheme) => {
    currentTheme.value = colorTheme;
    theme.global.name.value =
      colorTheme === 'darkTheme' ? 'darkTheme' : 'lightTheme';
  };

  return { currentTheme, updateColorTheme };
});
