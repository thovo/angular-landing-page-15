import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroModule } from './components/hero/hero.module';
import { SkillsModule } from './components/skills/skills.module';
import { ExperiencesModule } from './components/experiences/experiences.module';
import { AboutMeModule } from './components/about-me/about-me.module';
import { ProjectsModule } from './components/projects/projects.module';
import { RecommendationsModule } from './components/recommendations/recommendations.module';
import { ContactModule } from './components/contact/contact.module';
import { FooterModule } from './components/footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    HeroModule,
    SkillsModule,
    ExperiencesModule,
    AboutMeModule,
    ProjectsModule,
    RecommendationsModule,
    ContactModule,
    FooterModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
