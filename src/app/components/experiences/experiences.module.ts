import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [ExperiencesComponent, ExperienceComponent],
  imports: [CommonModule],
  exports: [ExperiencesComponent],
})
export class ExperiencesModule {}
