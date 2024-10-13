import {
  Component,
  Injector,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ExperiencesComponent } from './components/experiences/experiences.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Landing Page';
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.loadLazyComponents();
  }

  async loadLazyComponents(): Promise<void> {
    import('./components/experiences/experiences.module').then(
      async (module) => {
        this.templateViewContainerRef.createComponent(ExperiencesComponent);
      },
    );
  }
}
