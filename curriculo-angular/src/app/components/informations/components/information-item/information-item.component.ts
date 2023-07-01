import { Component, Input } from '@angular/core';
import { InformationsData } from 'src/app/models/informations-data.model';

@Component({
  selector: 'app-information-item',
  templateUrl: './information-item.component.html',
  styleUrls: ['./information-item.component.css']
})
export class InformationItemComponent {
  @Input() informationItem!: InformationsData;

}
