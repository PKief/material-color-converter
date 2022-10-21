import type { ColorTheme } from "@/models";
import { getMediaPreference } from "@/themes";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorThemeStore = defineStore("colorTheme", () => {
  const colorTheme = ref(getMediaPreference());

  const updateColorTheme = (color: ColorTheme) => {
    colorTheme.value = color;
  };

  return { colorTheme, updateColorTheme };
});
