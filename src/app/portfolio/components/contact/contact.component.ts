import { Component, computed, input } from '@angular/core';
import { ContactInfoComponent } from "../contact-info/contact-info.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { CvInfo } from '../../store/cvinfo.store';
import { BaseComponent } from '../base-component.component';


export type ContactInfo = Pick<CvInfo, 
                        'availability' |
                        'avail_short'|
                        'location'|
                        'email'>;

@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent extends BaseComponent {
  cvinfo = input.required<CvInfo>();

  readonly contactInfo = computed<ContactInfo>(() => ({
    availability:  this.cvinfo().availability, 
    avail_short : this.cvinfo().avail_short, 
    location:  this.cvinfo().location,
    email: this.cvinfo().email,
    
  }));

}
