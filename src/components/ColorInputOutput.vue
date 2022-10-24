<script setup lang="ts">
import { useSelectedColorStore } from "@/stores/selectedColor";
import { valid } from "chroma-js";
import { storeToRefs } from "pinia";

const store = useSelectedColorStore();

const { inputColor, selectedColor } = storeToRefs(store);

const updateInputColor = () => {
  if (isValidColor(inputColor.value)) {
    store.updateInputColor(inputColor.value);
  }
};

const isValidColor = (color: string) => {
  return valid(color);
};

const copySelectedColor = async () => {
  await navigator.clipboard.writeText(selectedColor.value);
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="8">
        <v-card class="p-3">
          <v-form
            class="color-form d-flex justify-content-between align-items-center gap-lg-4 flex-lg-row flex-column"
          >
            <div class="color-input">
              <v-text-field
                v-model="inputColor"
                label="Arbitrary CSS Color"
                @keyup="updateInputColor"
                hide-details="true"
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
              v-model="selectedColor"
              label="Material Design Color"
              required
              hide-details="true"
              append-inner-icon="mdi-content-copy"
              @click:append-inner="copySelectedColor"
            ></v-text-field>
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
