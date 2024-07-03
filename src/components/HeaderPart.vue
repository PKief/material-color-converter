<script setup lang="ts">
import ColorInputOutput from './ColorInputOutput.vue';
</script>

<template>
  <header>
    <v-container>
      <v-row justify="center">
        <v-col>
          <div class="app-header">
            <img alt="Logo" class="app-logo" src="@/assets/img/logo.png" />
            <h1 class="app-title">Material Color Converter</h1>
          </div>
          <div class="color-input-section pt-4">
            <ColorInputOutput />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(
    0deg,
    rgb(var(--v-theme-primary)) 17%,
    rgb(var(--v-theme-primary-darken-1)) 17%
  );
}

.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1.app-title {
    color: rgb(var(--v-theme-text));
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 0.5px;
  }

  img.app-logo {
    width: 9rem;
    padding: 2rem 0px;
  }
}
</style>
