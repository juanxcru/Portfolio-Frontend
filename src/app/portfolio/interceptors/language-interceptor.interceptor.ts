import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { LanguageService } from '../services/language.service';

export const acceptLanguageInterceptor: HttpInterceptorFn = (req, next) => {
  const lang = inject(LanguageService).locale(); 
  const cloned = req.clone({
    setHeaders: { 'Accept-Language': lang }
  });
  return next(cloned);
};

