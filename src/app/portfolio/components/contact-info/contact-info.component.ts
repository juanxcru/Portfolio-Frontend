import { Component, input } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { BaseComponent } from '../base-component.component';
import { ContactInfo } from '../contact/contact.component';

@Component({
  selector: 'app-contact-info',
  imports: [SocialLinksComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
})
export class ContactInfoComponent extends BaseComponent {

  readonly contactInfo = input.required<ContactInfo>();



}
