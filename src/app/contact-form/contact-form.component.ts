
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { MailService } from '../services/mail.service';

// Property declared by Google Tag Manager
declare global {
  interface Window {
    dataLayer: any;
  }
}
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
  providers: [MailService]
})
export class ContactFormComponent {
  public submitFailed: boolean = false;
  public methodSelect: Array<any> = [
    { value: 'email', label: 'Contact me via Email' },
    { value: 'phone', label: 'Contact me via Phone' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mailService: MailService
  ) { }

  quoteFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    city: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(150)
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(280)
    ]),
    contactMethod: new FormControl('')
  });

  get name() {
    return this.quoteFormGroup.get('name');
  }

  get city() {
    return this.quoteFormGroup.get('city');
  }

  get phone() {
    return this.quoteFormGroup.get('phone');
  }

  get email() {
    return this.quoteFormGroup.get('email');
  }

  get message() {
    return this.quoteFormGroup.get('message');
  }

  get contactMethod() {
    return this.quoteFormGroup.get('contactMethod');
  }





  handleReset() {
    this.submitFailed = false;
    this.quoteFormGroup.reset({});
  }

  handleSubmit(event: any) {
    event.preventDefault();

    // Trigger GTM Event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'quoteFormSubmission' // Unique string tracked on GTM
    });

    // Read UTM Cookie
    const utm_cookie = document.cookie.match('(^|;) ?utm=([^;]*)(;|$)');
    let utm_source = '';
    let utm_medium = '';
    let utm_campaign = '';
    if (utm_cookie) {
      [utm_source, utm_medium, utm_campaign] = utm_cookie[2].split(':');
    }

    const url = this.route.snapshot.url.pop();
    let option = 'Homepage';
    if (url !== undefined) {
      option = url.toString();
    }

    this.mailService
      .send({
        ...this.quoteFormGroup.value,
        option,
        utm_source,
        utm_medium,
        utm_campaign
      })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        this.quoteFormGroup.reset({});
        this.router.navigate(['/thank-you']);
      })
      .catch((err) => {
        console.log(err)
        this.submitFailed = true;
      });
  }

}
