<script setup lang="ts">
import ColorThemeToggle from './components/ColorThemeToggle.vue';
import FooterPart from './components/FooterPart.vue';
import HeaderPart from './components/HeaderPart.vue';
import MainPart from './components/MainPart.vue';
</script>

<template>
  <v-app class="app">
    <ColorThemeToggle />
    <HeaderPart />
    <MainPart />
    <FooterPart />
  </v-app>
</template>

<style lang="scss">
.app {
  background: rgb(var(--v-theme-primary));
}
</style>
