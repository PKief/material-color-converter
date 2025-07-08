<script setup lang="ts">
import chroma from "chroma-js";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useSelectedColorStore } from "@/stores/selectedColor";

const store = useSelectedColorStore();

const { inputColor, selectedColor } = storeToRefs(store);
const selectedOutputMode = ref<"hex" | "name" | "rgb">("hex");

const selectedOutput = computed(() => {
  switch (selectedOutputMode.value) {
    case "name":
      return `${selectedColor.value?.category} ${selectedColor.value?.hue}`.replaceAll(
        " ",
        "-"
      );
    case "rgb":
      return chroma(selectedColor.value?.hex ?? "").css();
    case "hex":
    default:
      return selectedColor.value?.hex;
  }
});

const switchOutputMode = () => {
  if (selectedOutputMode.value === "hex") {
    selectedOutputMode.value = "name";
  } else if (selectedOutputMode.value === "name") {
    selectedOutputMode.value = "rgb";
  } else {
    selectedOutputMode.value = "hex";
  }
};

const updateInputColor = () => {
  if (isValidColor(inputColor.value)) {
    store.updateInputColor(inputColor.value);
  }
};

const isValidColor = (color: string) => {
  return chroma.valid(color);
};

const copySelectedColor = async () => {
  if (selectedColor) {
    await navigator.clipboard.writeText(selectedOutput.value ?? "");
  }
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="8">
        <v-card class="pa-3">
          <v-form
            class="color-form d-flex justify-space-between align-center ga-lg-4 flex-lg-row flex-column"
          >
            <div class="color-input">
              <v-text-field
                v-model="inputColor"
                label="Arbitrary CSS Color"
                @keyup="updateInputColor"
                hide-details="auto"
                clearable
              ></v-text-field>

              <input
                v-model="inputColor"
                type="color"
                @change="updateInputColor"
              />
            </div>

            <v-icon
              icon="mdi-arrow-right"
              class="d-none d-lg-block overflow-visible"
            />
            <v-icon icon="mdi-arrow-down" class="d-lg-none mb-2 mt-2" />

            <v-text-field
              v-model="selectedOutput"
              label="Material Design Color"
              required
              hide-details="auto"
            >
              <template v-slot:append-inner>
                <v-btn icon variant="text" @click="switchOutputMode">
                  <v-icon icon="mdi-swap-horizontal" />
                  <v-tooltip activator="parent" location="top" open-delay="500"
                    >Switch color output</v-tooltip
                  >
                </v-btn>
                <v-btn icon variant="text" @click="copySelectedColor">
                  <v-icon icon="mdi-content-copy" />
                  <v-tooltip activator="parent" location="top" open-delay="500"
                    >Copy</v-tooltip
                  >
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-card {
  background: rgb(var(--v-theme-secondary));
  box-shadow: 0 11px 39px -13px #2632385c;
}

.color-form {
  .v-input {
    width: 100%;
  }

  .color-input {
    display: grid;
    grid-template-columns: 27fr 1fr;
    align-items: center;
    grid-gap: 1rem;
  }

  input[type="color"] {
    cursor: pointer;
    height: 2rem;
    width: 2rem;
  }
}
</style>
