import { Component, input } from '@angular/core';
import { SocialLinks } from '../portfolio-body/portfolio-viewmodel-types';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css',
})
export class SocialLinksComponent {

  readonly socialLinks = input.required<SocialLinks>();

}
