import { Component } from '@angular/core';
import { Recommendation } from './recommendation/recommendation.component';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';
import { faCubes } from '@fortawesome/free-solid-svg-icons/faCubes';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  recommendations: Recommendation[] = [
    {
      name: 'John Doe',
      icon: faCode,
      job: 'Senior Front End Developer',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/man.jpeg',
    },
    {
      name: 'Joe Smith',
      icon: faUser,
      job: 'Product Owner',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/man-1.jpeg',
    },
    {
      name: 'Jane Smith',
      icon: faTerminal,
      job: 'Devops',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/woman.jpeg',
    },
    {
      name: 'Jane Carry',
      icon: faPalette,
      job: 'Designer',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/woman-1.jpeg',
    },
    {
      name: 'Joe Support',
      icon: faCubes,
      job: 'Back End Developer',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/man-2.jpeg',
    },
    {
      name: 'Jane Semi Carry',
      icon: faComments,
      job: 'Bussiness Analyst',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/woman-2.jpeg',
    },
    {
      name: 'Camille Tank',
      icon: faBriefcase,
      job: 'Project Manager',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: '/assets/images/woman-3.jpeg',
    },
  ];
}
