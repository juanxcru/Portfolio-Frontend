import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService, Locale } from '../../services/language.service';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent extends BaseComponent{
  private readonly lang = inject(LanguageService);
  readonly locale = this.lang.locale; 
  readonly isEn = computed(() => this.locale() === 'en');
  readonly isEs = computed(() => this.locale() === 'es');

  setLocale(locale: Locale) {
    this.lang.setLocale(locale);
  }
}
