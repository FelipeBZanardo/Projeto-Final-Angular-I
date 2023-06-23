import { Component, Input } from '@angular/core';
import { SkillData } from 'src/app/models/skill-data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() public skills!: SkillData[];
}
