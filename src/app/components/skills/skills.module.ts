import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [SkillsComponent, SkillComponent],
  imports: [CommonModule],
  exports: [SkillsComponent],
})
export class SkillsModule {}
