import { Component, Input } from '@angular/core';
import { InformationsData } from 'src/app/models/informations-data.model';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent {
  @Input() public informationItem!: InformationsData;
}
