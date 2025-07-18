<script setup lang="ts">
import { storeToRefs } from "pinia";
import { getSuggestions } from "svg-color-linter";
import { ref } from "vue";
import { materialColors } from "@/colors";
import type { ResultColor } from "@/models";
import { useSelectedColorStore } from "@/stores/selectedColor";
import ColorPalette from "./ColorPalette.vue";
import ColorSuggestions from "./ColorSuggestions.vue";

const suggestedColors = ref<ResultColor[]>([]);
const store = useSelectedColorStore();
const { inputColor, selectedColor } = storeToRefs(store);
const { updateSelectedColor } = store;

const selectColor = (hex: string) => {
  updateSelectedColor(hex);
};

/**
 * Convert the given color to a color of the Material Design color palette
 */
const convert = (color: string): void => {
  suggestedColors.value = getSuggestions(
    color,
    materialColors.map((c) => c.hex)
  );

  updateSelectedColor(suggestedColors.value[0]?.hex);
};

store.$onAction((action) => {
  if (action.name === "updateInputColor") {
    convert(inputColor.value);
  }
});

// initial color convertion
convert(inputColor.value);
</script>

<template>
  <main class="pt-2">
    <v-container>
      <v-row justify="center">
        <v-col sm="12" md="8">
          <v-row>
            <v-col cols="12" sm="12" lg="2">
              <ColorSuggestions
                :suggested-colors="suggestedColors"
                :selected-color="selectedColor?.hex"
                @click-color="selectColor"
              />
            </v-col>
            <v-col cols="12" sm="12" lg="10">
              <ColorPalette
                :selected-color="selectedColor?.hex"
                @click-color="selectColor"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
