import { Component, input } from '@angular/core';
import { ContactInfoComponent } from "../contact-info/contact-info.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { CvInfo } from '../../store/cvinfo.store';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent extends BaseComponent {
  cvinfo = input.required<CvInfo>();

}
