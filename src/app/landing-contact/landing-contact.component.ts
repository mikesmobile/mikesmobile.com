
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

import { MailResumeService } from '../services/mailResume';

@Component({
  selector: 'app-landing-contact',
  templateUrl: './landing-contact.component.html',
  styleUrls: ['./landing-contact.component.sass'],
  providers: [MailResumeService]
})
export class LandingContactComponent implements OnInit {
  jobs = ["Select A Position", "Customer Service Representative", "Apprentice Service Technician", "Apprentice Residential Estimator (Sales)"];
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  phone: FormControl = new FormControl("", [Validators.required, Validators.minLength(10)]);
  position: FormControl = new FormControl("", [Validators.required]);
  file: FormControl = new FormControl("", [Validators.required]);
  fileSource: FormControl = new FormControl('', [Validators.required])
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(1500)]);




  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user

  constructor(private formBuilder: FormBuilder,
    private MailResumeService: MailResumeService,
  ) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      phone: this.phone,
      position: this.position,
      file: this.file,
      fileSource: this.fileSource,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      });
    }
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("phone", this.form.get("phone").value);
      formData.append("position", this.form.get("position").value);
      formData.append("file", this.form.get("fileSource").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits

      this.MailResumeService.send(formData).then(
        (response) => {
          this.responseMessage = "Thanks for the message! We'll get back to you soon!";
          this.submitted = true; // show the response message
          // this.form.enable(); // re enable the form after a success
          // this.isLoading = false; // re enable the submit button
          // console.log(response);
        }

      );

    }
  }
}



