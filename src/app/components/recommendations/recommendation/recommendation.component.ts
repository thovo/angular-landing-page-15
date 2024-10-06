import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';

export type Recommendation = {
  icon: IconDefinition;
  name: string;
  job: string;
  quote: string;
  imgUrl: string;
};

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationComponent {
  @Input() recommendation!: Recommendation;
  @Input() class!: string;
  protected readonly faQuoteLeft = faQuoteLeft;
  protected readonly faQuoteRight = faQuoteRight;
}
