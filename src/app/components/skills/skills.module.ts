import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillComponent } from './skill/skill.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faHtml5,
  faJenkins,
  faJs,
  faNode,
  faReact,
  faSass,
  faStackOverflow,
  faVuejs,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [SkillsComponent, SkillComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SkillsComponent],
})
export class SkillsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStackOverflow,
      faAngular,
      faReact,
      faVuejs,
      faNode,
      faHtml5,
      faJenkins,
      faJs,
      faWordpress,
      faSass,
    );
  }
}
