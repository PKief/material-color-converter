<template>
  <footer>
    <v-container>
      <v-row justify="center">
        <v-col sm="12" lg="8">
          <div class="footer-text text-center my-5">
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
  background: var(--v-theme-primary);

  .footer-text {
    p,
    a {
      color: var(--v-theme-primary);
      text-decoration: none;
    }

    img {
      width: 2rem;
    }
  }
}
</style>
