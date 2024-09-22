import { Component } from '@angular/core';
import { Experience } from './experience/experience.component';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      title: 'Expert Front End Developer',
      location: 'Pantin, France',
      period: {
        start: new Date(),
        end: new Date(),
      },
      company: 'Ekino',
      description: {
        lines: [
          'Lead project deploying and building solutions for bank treasury applications',
          `Lead Banyan project of Givaudan, build an application for Givaudan's clients to book chemistry products online`,
          `Optimize the performance and loading time by upgrading to the latest version of Angular.`,
        ],
      },
    },
    {
      title: 'Expert Front End Developer',
      location: 'Pantin, France',
      period: {
        start: new Date(),
        end: new Date(),
      },
      company: 'Ekino',
      description: {
        lines: [
          'Lead project deploying and building solutions for bank treasury applications',
          `Lead Banyan project of Givaudan, build an application for Givaudan's clients to book chemistry products online`,
          `Optimize the performance and loading time by upgrading to the latest version of Angular.`,
        ],
      },
    },
    {
      title: 'Expert Front End Developer',
      location: 'Pantin, France',
      period: {
        start: new Date(),
        end: new Date(),
      },
      company: 'Ekino',
      description: {
        lines: [
          'Lead project deploying and building solutions for bank treasury applications',
          `Lead Banyan project of Givaudan, build an application for Givaudan's clients to book chemistry products online`,
          `Optimize the performance and loading time by upgrading to the latest version of Angular.`,
        ],
      },
    },
    {
      title: 'Expert Front End Developer',
      location: 'Pantin, France',
      period: {
        start: new Date(),
        end: new Date(),
      },
      company: 'Ekino',
      description: {
        lines: [
          'Lead project deploying and building solutions for bank treasury applications',
          `Lead Banyan project of Givaudan, build an application for Givaudan's clients to book chemistry products online`,
          `Optimize the performance and loading time by upgrading to the latest version of Angular.`,
        ],
      },
    },
    {
      title: 'Expert Front End Developer',
      location: 'Pantin, France',
      period: {
        start: new Date(),
        end: new Date(),
      },
      company: 'Ekino',
      description: {
        lines: [
          'Lead project deploying and building solutions for bank treasury applications',
          `Lead Banyan project of Givaudan, build an application for Givaudan's clients to book chemistry products online`,
          `Optimize the performance and loading time by upgrading to the latest version of Angular.`,
        ],
      },
    },
  ];
}
