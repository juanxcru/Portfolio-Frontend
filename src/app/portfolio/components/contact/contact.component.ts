import { Component, computed, input } from '@angular/core';
import { ContactInfoComponent } from "../contact-info/contact-info.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { BaseComponent } from '../base-component.component';
import { ContactInfo, SocialLinks } from '../portfolio-body/portfolio-viewmodel-types';




@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent extends BaseComponent {
  readonly contactInfo = input.required<ContactInfo>();
  readonly socialLinks = input.required<SocialLinks>();

}
