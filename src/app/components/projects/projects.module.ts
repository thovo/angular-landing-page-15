import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
