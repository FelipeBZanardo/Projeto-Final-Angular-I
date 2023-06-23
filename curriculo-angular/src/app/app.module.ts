import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { InformationsComponent } from './components/informations/informations.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skills/components/skill-item/skill-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperiencesItemComponent } from './components/experiences/components/experiences-item/experiences-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    InformationsComponent,
    SkillsComponent,
    SkillItemComponent,
    FooterComponent,
    ExperiencesComponent,
    ExperiencesItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
