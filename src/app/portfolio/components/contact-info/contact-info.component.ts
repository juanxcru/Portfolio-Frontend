import { Component, input } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { BaseComponent } from '../base-component.component';
import { CvInfo } from '../../store/cvinfo.store';

@Component({
  selector: 'app-contact-info',
  imports: [SocialLinksComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
})
export class ContactInfoComponent extends BaseComponent {

}
