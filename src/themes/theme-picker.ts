import type { ColorTheme } from '@/models';

/**
 * Detect the prefered color theme by the user
 * @returns Preference of either dark-theme or light-theme
 */
export const getMediaPreference = (): ColorTheme => {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  if (hasDarkPreference) {
    return 'darkTheme';
  } else {
    return 'lightTheme';
  }
};
