import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  RequiredValidator,
} from '@angular/forms';
import { Message } from 'src/app/models/message.model';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/components/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  @Output() hideForm = new EventEmitter<boolean>();

  public message?: Message;
  public contactForm!: FormGroup;
  public characterCount: number = 0;

  ngOnInit(): void {
    this.buildForm();
    this.subscribeToValueChanges();
  }

  public buildForm(): void {
    const required = Validators.required;

    this.contactForm = new FormGroup({
      email: new FormControl(null, [
        required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      message: new FormControl(null, [
        required,
        Validators.minLength(10),
        Validators.maxLength(300),
      ]),
    });
  }

  private subscribeToValueChanges(): void {
    const messageControl = this.contactForm.get('message');

    if (messageControl) {
      messageControl.valueChanges.subscribe((value: string) => {
        this.characterCount = value.length;
      });
    }
  }

  private openSuccessDialog(): void {
    this.dialog.open(SuccessDialogComponent);
  }

  public onSubmit(): void {
    this.message = this.contactForm.value;
    console.log(this.message);
    this.openSuccessDialog();
    this.hideForm.emit();
  }

  closeModal(): void {
    this.hideForm.emit();
  }
}
