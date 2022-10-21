<script setup lang="ts">
import { useSelectedColorStore } from "@/stores/selectedColor";
import { valid } from "chroma-js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useSelectedColorStore();

const inputColor = ref("");
const outputColor = storeToRefs(store).selectedColor;

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
  <div class="row d-flex justify-content-center py-3">
    <div class="col-12 col-lg-8">
      <v-card class="p-3" theme="dark">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="inputColor"
                  label="Arbitrary CSS Color"
                  required
                  theme="dark"
                  @keyup="triggerConvert()"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="outputColor"
                  label="Material Design Color"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
