import { Component, computed, input } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { TechPillComponent } from '../tech-pill/tech-pill.component';
import { CvInfo } from '../../store/cvinfo.store';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-hero',
  imports: [SocialLinksComponent, TechPillComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent extends BaseComponent {

  readonly cvinfo = input.required<CvInfo>();

  readonly socialLinks = computed(() => {
    return  {
      github: this.cvinfo().github,
      linkedin: this.cvinfo().linkedin,
      whatsapp: this.cvinfo().whatsapp,
      email: this.cvinfo().email 
    }
    
  });

}
