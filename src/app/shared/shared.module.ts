import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ToRgbPipe } from './pipes/to-rgb.pipe';
import { ToHslPipe } from './pipes/to-hsl.pipe';
import { GithubCornerComponent } from './github-corner/github-corner.component';

@NgModule({
  declarations: [ToRgbPipe, ToHslPipe, GithubCornerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, ToRgbPipe, ToHslPipe, GithubCornerComponent],
})
export class SharedModule {}
