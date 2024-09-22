import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type Experience = {
  title: string;
  location: string;
  company: string;
  period: {
    start: Date;
    end: Date;
  };
  description: {
    lines: string[];
  };
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  @Input() experience!: Experience;
}
