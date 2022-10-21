<script setup lang="ts">
import { useSelectedColorStore } from "@/stores/selectedColor";
import { valid } from "chroma-js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useSelectedColorStore();

const outputColor = storeToRefs(store).selectedColor;
const inputColor = ref(store.selectedColor);

const triggerConvert = () => {
  if (isValidColor(inputColor.value)) {
    store.updateSelectedColor(inputColor.value);
  }
};

const isValidColor = (color: string) => {
  return valid(color);
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
            <v-text-field
              v-model="inputColor"
              variant="outlined"
              label="Arbitrary CSS Color"
              required
              @keyup="triggerConvert()"
              hide-details="true"
            ></v-text-field>

            <v-icon
              icon="mdi-arrow-right"
              class="d-none d-lg-block overflow-visible"
            />
            <v-icon icon="mdi-arrow-down" class="d-lg-none mb-2" />

            <v-text-field
              v-model="outputColor"
              variant="outlined"
              label="Material Design Color"
              required
              hide-details="true"
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
}

.color-form {
  .v-input {
    width: 100%;
  }
}
</style>
