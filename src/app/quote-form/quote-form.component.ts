import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ng-uikit-pro-standard';

import { MailService } from '../services/mail.service';
import phoneListJSON from '../../assets/json/phoneList.json';

// Property declared by Google Tag Manager
declare global {
  interface Window {
    dataLayer: any;
  }
}

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.sass'],
  providers: [MailService]
})
export class QuoteFormComponent {
  ourPhone = phoneListJSON[0].phone

  @ViewChild('quoteModal') public quoteModal: ModalDirective;
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
    return "";
  }

  public show() {
    this.quoteModal.show();
  }

  hide() {
    this.quoteModal.hide();
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
    let utm_term = ''
    if (utm_cookie) {
      [utm_source, utm_medium, utm_campaign, utm_term] = utm_cookie[2].split(':');
    }

    const url = this.route.snapshot.url.pop();
    let option = 'Homepage';
    if (url !== undefined) {
      option = this.route.snapshot.url[this.route.snapshot.url.length - 1].path + '/' + this.route.snapshot.params.slug
    }
    this.mailService
      .send({
        ...this.quoteFormGroup.value,
        option,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term
      })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        this.hide();
        this.quoteFormGroup.reset({});
        this.router.navigate(['/thank-you']);
      })
      .catch(() => {
        this.submitFailed = true;
      });
  }
}
