<template>
  <footer>
    <v-container>
      <v-row justify="center">
        <v-col sm="12" lg="8">
          <div class="footer-text text-center my-3">
            <p>
              Created with ♡ by
              <a
                href="https://pkief.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                >Philipp Kief</a
              >
            </p>
            <a
              href="https://github.com/PKief/material-color-converter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to GitHub repository"
            >
              <svg
                class="mt-2 github-logo"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5 0.5 0.08 0.66-0.23 0.66-0.5v-1.69c-2.77 0.6-3.36-1.34-3.36-1.34-0.46-1.16-1.11-1.47-1.11-1.47-0.91-0.62 0.07-0.6 0.07-0.6 1 0.07 1.53 1.03 1.53 1.03 0.87 1.52 2.34 1.07 2.91 0.83 0.09-0.65 0.35-1.09 0.63-1.34-2.22-0.25-4.55-1.11-4.55-4.92 0-1.11 0.38-2 1.03-2.71-0.1-0.25-0.45-1.29 0.1-2.64 0 0 0.84-0.27 2.75 1.02 0.79-0.22 1.65-0.33 2.5-0.33s1.71 0.11 2.5 0.33c1.91-1.29 2.75-1.02 2.75-1.02 0.55 1.35 0.2 2.39 0.1 2.64 0.65 0.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91 0.36 0.31 0.69 0.92 0.69 1.85v2.74c0 0.27 0.16 0.59 0.67 0.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0-10-10z"
                />
              </svg>
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

    a,
    .github-logo {
      transition: all 0.2s ease-in-out;
    }

    a:hover {
      color: black;
    }

    .github-logo {
      width: 2rem;
      fill: #9e9e9e;

      &:hover {
        fill: black;
      }
    }
  }
}
</style>
