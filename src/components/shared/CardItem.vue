<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "../../assets/base.scss";

.card {
  background-color: var(--color-background-mute);
  box-shadow: 1px 1px 9px 4px var(--vt-c-black);
}
</style>
