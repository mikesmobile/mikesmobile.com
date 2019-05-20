import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ng-uikit-pro-standard';

import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.sass'],
  providers: [ServicesService]
})
export class QuoteFormComponent {
  @ViewChild('quoteModal') public quoteModal: ModalDirective;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: ServicesService
  ) {}

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
    ])
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

  public show() {
    this.quoteModal.show();
  }

  hide() {
    this.quoteModal.hide();
  }

  handleSubmit(event: any) {
    event.preventDefault();

    const { name, city, phone, email, message } = this.quoteFormGroup.value;

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

    this._service
      .create(
        name,
        city,
        phone,
        email,
        message,
        option,
        utm_source,
        utm_medium,
        utm_campaign
      )
      .subscribe(() => {
        this.hide();
        this.router.navigate(['/thank-you']);
      });
  }
}
