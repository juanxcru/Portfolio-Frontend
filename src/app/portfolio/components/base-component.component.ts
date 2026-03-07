import { inject } from "@angular/core";
import { LanguageService } from "../services/language.service";

export abstract class BaseComponent {
  protected readonly ui = inject(LanguageService).ui;
}