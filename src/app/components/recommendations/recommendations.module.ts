import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RecommendationsComponent, RecommendationComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [RecommendationsComponent],
})
export class RecommendationsModule {}
