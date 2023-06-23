import { Component, Input } from '@angular/core';
import { SkillItemData } from 'src/app/models/skill-item-data.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Input() public skillItems!: SkillItemData[];
}
