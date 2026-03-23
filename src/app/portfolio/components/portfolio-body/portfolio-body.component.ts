import { Component, computed, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from '../footer/footer.component';
import { CvInfoStore } from '../../store/cvinfo.store';
import { ContactInfo, SocialLinks, Stack, Titles } from './portfolio-viewmodel-types';





@Component({
  selector: 'app-portfolio-body',
  imports: [NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './portfolio-body.component.html',
  styleUrl: './portfolio-body.component.css',
})
export class PortfolioBodyComponent {

  readonly store = inject(CvInfoStore);

  readonly cv = computed(() => {
    const value = this.store.cvInfo();
    if (!value) {
      console.error("cvinfo not loaded");
      throw new Error('cvInfo not loaded');
    }
    return value;
  });


  readonly contactInfo = computed<ContactInfo>(() => {
    return {
      availability: this.cv().availability,
      avail_short: this.cv().avail_short,
      location: this.cv().location,
      email: this.cv().email
    };
  });

  readonly socialLinks = computed<SocialLinks>(()=> {
    return {
      linkedin: this.cv().linkedin ,
      github: this.cv().github,
      email: this.cv().email
    };
  })

  readonly stack = computed<Stack>(()=> {
    return {
      stack: this.cv().stack
    }
  });


  readonly titles = computed<Titles> (() =>{
      return{
        title: this.cv().title,
        subtitle: this.cv().subtitle
      }

  })


}
