import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type Skill = {
  name: string;
  icon: IconDefinition;
  understanding: SkillUnderstandingLevel;
};

export enum SkillUnderstandingLevel {
  KNOWN = 'I know about this thing',
  HEARD = 'I hear about this thing',
  USED = 'I use this thing',
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input() skill!: Skill;
}
