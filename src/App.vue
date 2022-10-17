<script setup lang="ts">
import FooterPart from "./components/FooterPart.vue";
import HeaderPart from "./components/HeaderPart.vue";
</script>

<template>
  <HeaderPart />

  <main class="pt-lg-5 pt-2">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-8">
          <div class="row">
            <div class="col-lg-2 col-12">
              <!-- <app-color-suggestions
                [selectedColor]="selectedColor"
                [suggestedColors]="suggestedColors"
                (selectColor)="selectColor($event)"
              ></app-color-suggestions> -->
            </div>
            <div class="col-lg-10 col-12 mt-lg-0 mt-4">
              <!-- <app-color-palette
                [selectedColor]="selectedColor"
                (selectColor)="selectColor($event)"
              ></app-color-palette> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterPart />
</template>

<style lang="scss">
@import "./assets/base.scss";

.color-input-section {
  width: 100%;
}

.color-values {
  width: 100%;
  border: 1px solid var(--color-text);
  padding: 2rem;
  border-radius: 5px;
  margin-top: 3rem;

  mat-form-field {
    width: 100%;
  }
}

main {
  background: var(--color-background);
}
</style>
