import { Component, Input } from '@angular/core';
import { ExperienceItemData } from 'src/app/models/experience-item-data.model';

@Component({
  selector: 'app-experiences-item',
  templateUrl: './experiences-item.component.html',
  styleUrls: ['./experiences-item.component.css']
})
export class ExperiencesItemComponent {
  @Input() public experienceItems!: ExperienceItemData[];
}
