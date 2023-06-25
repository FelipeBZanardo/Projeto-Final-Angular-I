import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  @Output() hideForm = new EventEmitter<boolean>();

  closeModal(): void {
    this.hideForm.emit();
  }
}
