<script setup lang="ts">
import { toRefs } from "vue";
import type { ResultColor } from "./../models";

const props = defineProps<{
  suggestedColors: ResultColor[];
  selectedColor: string | undefined;
}>();

defineEmits(["clickColor"]);
const { suggestedColors, selectedColor } = toRefs(props);
</script>

<template>
  <ol id="result-list" class="flex-lg-column flex-row">
    <li v-for="(color, index) in suggestedColors" :key="index">
      <button
        v-ripple
        class="result-item"
        @click="$emit('clickColor', color.hex)"
        tabindex="0"
      >
        <div class="ranking">
          {{ index + 1 }}
        </div>
        <div
          class="color-preview"
          :class="{ selected: selectedColor === color.hex }"
          :style="{ backgroundColor: color.hex }"
        ></div>
      </button>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
ol#result-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 100%;

  button.result-item {
    align-items: center;
    display: grid;
    grid-row-gap: 22px;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 10px;
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.2s ease-in-out;

    &:hover,
    &:focus {
      background-color: rgb(var(--v-theme-primary));
    }
  }

  .color-preview {
    width: 100%;
    height: 3rem;
    margin-right: 1rem;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0.25px #263238;

    &.selected {
      box-shadow: inset 0 0 0 2px white, 0px 0px 7px -1px #37474f;
    }
  }

  .ranking {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    font-size: 13px;
    color: #989898;
    border-radius: 50%;
    box-sizing: initial;
    box-shadow: 0px 3px 12px -4px #464646;
  }
}
</style>
