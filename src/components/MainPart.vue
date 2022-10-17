<template>
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
</template>

<style lang="scss" scoped>
@import "../assets/base.scss";

main {
  background: var(--color-background);
}
</style>
