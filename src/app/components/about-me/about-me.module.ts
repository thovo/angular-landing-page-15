import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
