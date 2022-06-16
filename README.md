<h1 align="center">
  <br>
    <img src="https://raw.githubusercontent.com/PKief/material-color-converter/main/src/assets/logo.png" alt="logo" width="200">
  <br><br>
  <a href="https://pkief.github.io/material-color-converter/">Material Color Converter</a>
  <br>
  <br>
</h1>

<h4 align="center">Convert any CSS color to a similar color of the Material Design.</h4>

<p align="center">
    <a href="https://github.com/PKief/material-color-converter/actions/workflows/main.yml"><img src="https://img.shields.io/github/workflow/status/pkief/material-color-converter/Build%20and%20Deploy%20App?style=for-the-badge&colorA=252526&colorB=43A047&label=Build" alt="Build"></a>
</p>

## Description

This web application was created to make it easier to pick the most similar color of the [Material Design color system](https://material.io/design/color/the-color-system.html). This is especially useful if one knows a color tone already, but wants to convert it to match the material design. The colors of the material design are all coordinated, so that they offer suitable contrasts and complement each other very well.

The Material Color Converter supports the input of all data types of the [CSS color definitions](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value):

| Data type | Example         |
| --------- | --------------- |
| Keyword   | red             |
| HEX       | #ff0000         |
| RGB       | rgb(255,0,0)    |
| HSL       | hsl(0,50%,100%) |

After the input of the color the converter compares the color with the Material Design color palette and suggests five colors which are close to the input color. Each of these suggested colors can be selected by clicking on it to highlight the color in the color palette. This allows the user to see where the suggested color is located. In the color palette each color can be selected so that one can find out the respective HEX, RGB or HSL values.

## Development

### Requirements

- [Node.js 12](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

Install all dependencies by running this command:

```bash
npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

### Deployment

The application is deployed with a [GitHub Action](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions) to [GitHub Workflow](https://pages.github.com/). This is triggered by pushing a commit to the repository. During the deployment both the unit and e2e tests are executed to make sure that everything is running properly.

The workflows of this application can be found here:

https://github.com/PKief/material-color-converter/actions

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
