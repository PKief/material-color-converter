<h1 align="center">
  <br>
    <img src="https://raw.githubusercontent.com/PKief/material-color-converter/main/src/assets/img/logo.png" alt="logo" width="200">
  <br><br>
  <a href="https://pkief.com/material-color-converter/">Material Color Converter</a>
  <br>
  <br>
</h1>

<h4 align="center">Convert any CSS color to a similar color of the Material Design.</h4>

<p align="center">
    <a href="https://github.com/PKief/material-color-converter/actions/workflows/main.yml"><img src="https://img.shields.io/github/actions/workflow/status/pkief/material-color-converter/main.yml?style=for-the-badge&colorA=252526&colorB=43A047&label=Build" alt="Build"></a>
</p>

## Description

This web application was created to make it easier to pick the most similar color of the [Material Design color system](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors). This is especially useful if one knows a color tone already, but wants to convert it to match the material design. The colors of the material design are all coordinated, so that they offer suitable contrasts and complement each other very well.

The Material Color Converter supports the input of all data types of the [CSS color definitions](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value):

| Data type | Example         |
| --------- | --------------- |
| Keyword   | red             |
| HEX       | #ff0000         |
| RGB       | rgb(255,0,0)    |
| HSL       | hsl(0,50%,100%) |

After the input of the color the converter compares the color with the Material Design color palette and suggests five colors which are close to the input color. Each of these suggested colors can be selected by clicking on it to highlight the color in the color palette. This allows the user to see where the suggested color is located. In the color palette each color can be selected so that one can find out the respective HEX values.

## Development

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
