import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  text: string = 'Enter your Message here!';

  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log(this.contact);
  }
}
