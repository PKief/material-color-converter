# Material Color Converter

[Open the app](https://pkief.github.io/material-color-converter/)

Native HTML and CSS, with small JavaScript files for conversion and interactions. **Zero dependencies, no installation, no build, no server required.**

## Run

Open **`index.html`** in your browser. That's it.

The page uses ordered, deferred classic scripts so it works directly over `file://`. Browser code shares one `MaterialConverter` namespace; implementation details are scoped locally.

## Features

- HEX, RGB, HSL, and browser-supported CSS color names/syntax, plus a native color picker.
- Five closest Material Design matches and the full clickable palette.
- HEX/name/RGB output and clipboard copying.
- System-aware light/dark theme with an optional saved preference.
- Responsive layout, keyboard-accessible buttons, and validation.

Clipboard and theme storage availability depend on the browser, especially for local files. If clipboard access is blocked, the app selects the output for manual copying. Theme switching still works when storage is disabled.

## Color matching

A compact algorithm compares perceived color differences to the palette. Palette coordinates are calculated once. Results may differ from the previous implementation.

The browser's canvas parses CSS colors into sRGB; HEX is parsed directly. Transparent colors are composited over white independently of the selected theme. Context-dependent values such as `currentColor` and `var()` are rejected.

## Deploy (optional)

Host `index.html`, `src/`, and `public/` at the same relative paths using any static host. No compilation or base-path configuration is required.

GitHub Actions uploads the project directly to GitHub Pages on pushes to `main`. Configure the repository's **Pages source to GitHub Actions**. Node is not required to run or deploy the app.

Created with ♡ by [Philipp Kief](https://pkief.github.io/).
