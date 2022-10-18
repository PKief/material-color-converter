<script setup lang="ts">
import { materialColors } from "@/colors";
import type { ResultColor } from "@/models";
import { getSuggestions } from "svg-color-linter";
import { onMounted, reactive, ref } from "vue";
import ColorPalette from "./ColorPalette.vue";
import ColorSuggestions from "./ColorSuggestions.vue";

let suggestedColors = reactive<ResultColor[]>([]);
const selectedColor = ref<string | undefined>("");
const initialColor = ref<string | undefined>("");

const selectColor = (color: string) => {
  selectedColor.value = color;
};

const getRandomColor = () => {
  return materialColors[Math.floor(Math.random() * materialColors.length)];
};

/**
 * Convert the given color to a color of the Material Design color palette
 */
const convert = (color: string): void => {
  suggestedColors = getSuggestions(
    color,
    materialColors.map((c) => c.hex)
  );

  selectedColor.value = suggestedColors[0].hex;
};

onMounted(() => {
  initialColor.value = getRandomColor().hex;
  convert(initialColor.value);
});
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
