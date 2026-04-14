import { Injectable } from "@angular/core";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Injectable({ providedIn: 'root' })
export class EmailService {

  public sendEmail(data: any) {
    console.log("email")
    emailjs.sendForm(
      'service_fpqb10v', 'template_htx0rqd', data as string, {
      publicKey: 'wto2vOGtDCe02mWCz',
    })
    .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', (error as EmailJSResponseStatus).text);
    },
  );
  }



}