<script setup lang="ts">
import CardItem from "./shared/CardItem.vue";
</script>

<template>
  <div class="color-input row d-flex justify-content-center py-3">
    <div class="col-12 col-lg-8">
      <CardItem class="p-3">
        <form
          class="color-form d-flex justify-content-between align-items-center gap-lg-4 align-items-lg-baseline flex-lg-row flex-column"
        >
          <div class="color-form-field">
            <input id="color-input" />

            <input type="color" />
          </div>

          <div class="color-form-field">
            <input id="color-output" />
            <button>sync</button>
            <button></button>
          </div>
        </form>
      </CardItem>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
