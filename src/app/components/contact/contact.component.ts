import { Component } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons/faPaperPlane';
import { faBroom } from '@fortawesome/free-solid-svg-icons/faBroom';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  protected readonly faPaperPlane = faPaperPlane;
  protected readonly faBroom = faBroom;

  submit(): void {
    console.log(this.form);
  }

  getName(): string {
    return this.form.get('name')?.value;
  }

  getEmail(): string {
    return this.form.get('email')?.value;
  }

  getMessage(): string {
    return this.form.get('message')?.value;
  }
}
