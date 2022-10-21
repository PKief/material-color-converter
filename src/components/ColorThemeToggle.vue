<script setup lang="ts">
import { useColorThemeStore } from "@/stores/colorTheme";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useColorThemeStore();
const { currentTheme } = storeToRefs(store);
const isDarkMode = computed(() => currentTheme.value === "darkTheme");
const toggleTheme = () => {
  if (isDarkMode.value) {
    store.updateColorTheme("lightTheme");
  } else {
    store.updateColorTheme("darkTheme");
  }
};
store.updateColorTheme(currentTheme.value);
</script>

<template>
  <div id="dark-mode-toggle-area">
    <v-btn
      icon
      variant="text"
      aria-label="Button to toggle dark mode"
      @click="toggleTheme"
    >
      <v-icon v-if="isDarkMode" icon="mdi-white-balance-sunny" />
      <v-icon v-else icon="mdi-moon-waning-crescent" />
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/base.scss";

#dark-mode-toggle-area {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}
</style>
