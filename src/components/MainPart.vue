<script setup lang="ts">
import { materialColors } from "@/colors";
import type { ResultColor } from "@/models";
import { useSelectedColorStore } from "@/stores/selectedColor";
import { storeToRefs } from "pinia";
import { getSuggestions } from "svg-color-linter";
import { ref } from "vue";
import ColorPalette from "./ColorPalette.vue";
import ColorSuggestions from "./ColorSuggestions.vue";

const suggestedColors = ref<ResultColor[]>([]);
const store = useSelectedColorStore();
const { selectedColor } = storeToRefs(store);
const { updateSelectedColor } = store;

const selectColor = (color: string) => {
  console.log(color)
  updateSelectedColor(color);
};

/**
 * Convert the given color to a color of the Material Design color palette
 */
const convert = (color: string): void => {
  suggestedColors.value = getSuggestions(
    color,
    materialColors.map((c) => c.hex)
  );

  selectedColor.value = suggestedColors.value[0].hex;
};

store.$onAction(() => {
  convert(selectedColor.value);
});

// initial color convertion
convert(selectedColor.value);
</script>

<template>
  <main class="pt-lg-5 pt-2">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-8">
          <div class="row">
            <div class="col-lg-2 col-12">
              <ColorSuggestions
                :suggested-colors="suggestedColors"
                :selected-color="selectedColor"
                @click-color="selectColor"
              />
            </div>
            <div class="col-lg-10 col-12 mt-lg-0 mt-4">
              <ColorPalette
                :selected-color="selectedColor"
                @click-color="selectColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/base.scss";

main {
  background: var(--color-background);
}
</style>
