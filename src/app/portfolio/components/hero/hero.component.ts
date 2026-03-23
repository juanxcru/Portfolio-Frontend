import { Component, computed, input } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { TechPillComponent } from '../tech-pill/tech-pill.component';
import { BaseComponent } from '../base-component.component';
import { SocialLinks, Stack, Titles } from '../portfolio-body/portfolio-viewmodel-types';

@Component({
  selector: 'app-hero',
  imports: [SocialLinksComponent, TechPillComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent extends BaseComponent {

  readonly stack = input.required<Stack>();
  readonly titles = input.required<Titles>();
  readonly socialLinks = input.required<SocialLinks>();

}
