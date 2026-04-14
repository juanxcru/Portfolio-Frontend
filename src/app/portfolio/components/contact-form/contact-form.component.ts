import { Component, inject, input } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import { EmailService } from '../../services/email.service';
import { FormBuilder, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports: [ReactiveFormsModule]
})
export class ContactFormComponent extends BaseComponent {
  readonly emailInput = input.required();
  readonly emailService = inject(EmailService);

  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required, this.noNewLinesValidator()]],
    subject: ['', [Validators.required, this.noNewLinesValidator()]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(1000)]]
  });

  private noNewLinesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNewLine = /[\n\r]/.test(control.value);
      return hasNewLine ? { forbiddenChars: { value: control.value } } : null;
    };
  }


  protected onSubmit() {

    if(!this.contactForm.invalid){
      const form = document.getElementsByTagName('form');
      this.emailService.sendEmail(form.namedItem('form'));
    }

  }

  protected getFormErrors() {
    const errors: string[] = [];
    const controls = this.contactForm.controls;

    const errorUITexts = this.ui().errors;
    Object.keys(controls).forEach(key => {

    const control = controls[key as keyof typeof controls];

      if (control.invalid && (control.touched || control.dirty)) {
        // ej: formName
        const fieldKey = `form${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof typeof errorUITexts;
        const fieldLabel = errorUITexts[fieldKey] || key;

         Object.keys(control.errors || {}).forEach(errorKey => {
          const errorDetail = errorUITexts[errorKey as keyof typeof errorUITexts] || errorKey;
          
           errors.push(`${fieldLabel} ${errorDetail}`);

         })

      }
  })
   
    return errors;
  }

}
