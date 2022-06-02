import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorInputOutputComponent } from './components/color-input-output/color-input-output.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { ColorSuggestionsComponent } from './components/color-suggestions/color-suggestions.component';

const prefersReducedMotion = () => {
  const match = window.matchMedia('(prefers-reduced-motion: reduce)');
  return match.matches;
};

@NgModule({
  declarations: [
    AppComponent,
    ColorPaletteComponent,
    ColorSuggestionsComponent,
    ColorInputOutputComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule.withConfig({
      disableAnimations: prefersReducedMotion(),
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
