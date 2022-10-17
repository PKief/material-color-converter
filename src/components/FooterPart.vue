<template>
  <footer>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-8">
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
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/base.scss";
footer {
  background: var(--color-background);

  .footer-text {
    p,
    a {
      color: var(--color-background-mute);
      text-decoration: none;
    }

    img {
      width: 2rem;
    }
  }
}
</style>
