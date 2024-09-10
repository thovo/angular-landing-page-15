import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperiencesComponent} from "./experiences.component";


@NgModule({
  declarations: [ExperiencesComponent],
  imports: [
    CommonModule
  ],
  exports: [ExperiencesComponent]
})
export class ExperiencesModule {
}
