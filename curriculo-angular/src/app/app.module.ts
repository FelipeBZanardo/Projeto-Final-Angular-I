import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { InformationsComponent } from './components/informations/informations.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skills/components/skill-item/skill-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperiencesItemComponent } from './components/experiences/components/experiences-item/experiences-item.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { InformationItemComponent } from './components/informations/components/information-item/information-item.component';
import { SuccessDialogComponent } from './components/dialogs/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    InformationsComponent,
    SkillsComponent,
    SkillItemComponent,
    FooterComponent,
    ExperiencesComponent,
    ExperiencesItemComponent,
    SendMessageComponent,
    ModalFormComponent,
    InformationItemComponent,
    SuccessDialogComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
