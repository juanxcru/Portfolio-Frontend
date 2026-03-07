
import { computed, Injectable, signal } from "@angular/core";
import { UI_TEXTS, UiTexts } from "./ui-texts";


export type Locale = 'en' | 'es';

@Injectable({providedIn: 'root'})
export class LanguageService{
    /*
        not escalable for more languages :)
    */
    private readonly STORAGE_KEY = 'portfolio.locale';
    private readonly _locale = signal<Locale>(this._initialLocale());
    readonly locale = this._locale.asReadonly();

    readonly ui = computed<UiTexts>(() => {
        const locale = this.locale();
        return UI_TEXTS[locale];
    });
    
    // set (update) the lang in signal, and save in LS.
    public setLocale(locale: Locale){
        //maybe update.. 
        if(this._locale() === locale){
            return;
        }

        this._locale.set(locale);
        localStorage.setItem(this.STORAGE_KEY, locale);
        return;
    }

    // seek in session storage/browser for saved locale (lang) if not our langs, return default.
    private _initialLocale(): Locale{

        const savedLocale = sessionStorage.getItem(this.STORAGE_KEY);
        if (savedLocale === 'en' || savedLocale === 'es') {
            return savedLocale;
        }
        // browser lang, or 'en' (default)
        const browserLang = (navigator.language || 'en').toLowerCase();
        return browserLang.startsWith('es') ? 'es' : 'en';
        
        //return 'en';
     }


    

    
    
    
    
    
}