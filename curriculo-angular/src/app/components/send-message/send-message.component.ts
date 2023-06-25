import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  @Output() showForm = new EventEmitter<boolean>();

  showMessageForm() {
    this.showForm.emit();
  }
}
