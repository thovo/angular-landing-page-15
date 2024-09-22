import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skill, SkillUnderstandingLevel } from './skill/skill.component';
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

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      icon: faAngular,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'React',
      icon: faReact,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'VueJS',
      icon: faVuejs,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'Node',
      icon: faNode,
      understanding: SkillUnderstandingLevel.KNOWN,
    },
    {
      name: 'SCSS',
      icon: faSass,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'HTML',
      icon: faHtml5,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'Javascript',
      icon: faJs,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'Stackoverflow',
      icon: faStackOverflow,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'Wordpress',
      icon: faWordpress,
      understanding: SkillUnderstandingLevel.USED,
    },
    {
      name: 'Jenkins',
      icon: faJenkins,
      understanding: SkillUnderstandingLevel.USED,
    },
  ];
}
