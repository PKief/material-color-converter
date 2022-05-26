import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorInputOutputComponent } from './color-input-output/color-input-output.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorSuggestionsComponent } from './color-suggestions/color-suggestions.component';
import { SharedModule } from './shared/shared.module';

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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
