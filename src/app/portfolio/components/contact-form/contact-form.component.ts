import { Component, input } from '@angular/core';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent extends BaseComponent {
  readonly email = input.required();
}
