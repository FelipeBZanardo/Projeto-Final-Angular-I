import { Component, Input } from '@angular/core';
import { FooterData } from 'src/app/models/footer-data.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() public footerData!: FooterData[];
}
