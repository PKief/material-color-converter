<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import { materialColors } from '../colors';
import type { Color } from './../models';

const colorPalette = ref<Color[][]>([]);
const props = defineProps<{ selectedColor: string | undefined }>();
const { selectedColor } = toRefs(props);

defineEmits(['clickColor']);

/**
 * Generate the color palette to show all colors of the Material Design Color Palette
 */
const generateColorPalette = (): void => {
  // group colors by category (e.g. red or orange)
  const colorMap = materialColors.reduce<Record<string, Color[]>>(
    (result, color) => {
      (result[color.category] = result[color.category] || []).push(color);
      return result;
    },
    {}
  );

  // create two dimensional array for each category
  colorPalette.value = Object.keys(colorMap).reduce<Color[][]>(
    (result, key) => {
      result.push(colorMap[key]);
      return result;
    },
    []
  );
};

onMounted(() => {
  generateColorPalette();
});
</script>

<template>
  <div id="color-palette-wrapper">
    <div v-for="(category, i1) in colorPalette" :key="i1">
      <div v-for="(color, i2) in category" :key="i2">
        <div
          class="color-preview"
          :style="{ backgroundColor: color.hex }"
          :class="{ selected: selectedColor === color.hex }"
          @click="$emit('clickColor', color.hex)"
          tabindex="0"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#color-palette-wrapper {
  display: grid;
  grid-template-columns: repeat(21, auto);

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }

  .color-preview {
    width: auto;
    height: 1.5rem;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0.25px rgb(var(--v-theme-text));

    &.selected {
      box-shadow: inset 0 0 0 2px white,
        0px 0px 7px -1px rgb(var(--v-theme-text));
      z-index: 100;
    }
  }
}
</style>
