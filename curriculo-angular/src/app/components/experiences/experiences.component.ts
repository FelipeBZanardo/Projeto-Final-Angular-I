import { Component, Input } from '@angular/core';
import { ExperienceData } from 'src/app/models/experience-data.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  @Input() public experiences!: ExperienceData[];
}
