<script setup lang="ts"></script>

<template>
  <header>
    <div class="app-header container">
      <img src="assets/logo.png" alt="App Logo" class="app-logo" />
      <h1 class="app-title">Material Color Converter</h1>
    </div>
    <div class="color-input-section pt-4">
      <div class="container">
        <input type="text" />
      </div>
    </div>
    <div class="dark-mode-toggle-area">
      <button
        mat-icon-button
        matTooltip="Toggle Dark Mode"
        aria-label="Button to toggle dark mode"
      >
        icon
      </button>
    </div>
  </header>
</template>

<style lang="scss">
.app {
  background: red;
}

header {
  background: red;

  .dark-mode-toggle-area {
    position: absolute;
    top: 1rem;
    right: 1rem;
    mat-icon {
      color: red;
    }
  }
}

.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1.app-title {
    color: red;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 0.5px;
  }

  img.app-logo {
    width: 9rem;
    padding: 2rem 0px;
  }
}

.color-input-section {
  width: 100%;
}

.color-values {
  width: 100%;
  border: 1px solid red;
  padding: 2rem;
  border-radius: 5px;
  margin-top: 3rem;

  mat-form-field {
    width: 100%;
  }
}

main,
footer {
  background: red;
}

footer {
  .footer-text {
    p,
    a {
      color: red;
      text-decoration: none;
    }

    img {
      width: 2rem;
    }
  }
}
</style>
