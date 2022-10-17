<template>
  <header>
    <div class="container">
      <div class="app-header">
        <img alt="Logo" class="app-logo" src="@/assets/img/logo.png" />
        <h1 class="app-title">Material Color Converter</h1>
      </div>
      <div class="color-input-section pt-4">
        <input type="text" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/base.scss";

header {
  background: linear-gradient(
    0deg,
    var(--color-background) 15%,
    var(--color-background-soft) 15%
  );
}

.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1.app-title {
    color: var(--color-text);
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
