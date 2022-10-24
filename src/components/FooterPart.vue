<template>
  <footer>
    <v-container>
      <v-row justify="center">
        <v-col sm="12" lg="8">
          <div class="footer-text text-center my-3">
            <p>
              Created with ♡ by
              <a href="https://pkief.github.io/">Philipp Kief</a>
            </p>
            <a
              href="https://github.com/PKief/material-color-converter"
              aria-label="Link to GitHub repository"
            >
              <img
                class="mt-2"
                src="@/assets/img/github.svg"
                alt="GitHub Logo"
                fill="#AB7C94"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .footer-text {
    p,
    a {
      color: rgba(var(--v-theme-text), 0.25);
      text-decoration: none;
      font-size: 14px;
    }

    img {
      width: 2rem;
    }
  }
}
</style>
