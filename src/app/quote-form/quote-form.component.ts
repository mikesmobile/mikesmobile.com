import { Component, OnInit, ViewChild, Input, OnDestroy, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { ServicesService } from '../services/service.service';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { ActivatedRoute, Router } from '@angular/router';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.sass']
})
export class QuoteFormComponent implements OnInit, OnDestroy{
  @Input() product:string ;
  visible=false;
  @ViewChild('basicModal') public basicModal:ModalDirective;
  show(){
  this.basicModal.show();
  }
  hide(){
  this.basicModal.hide();
  }

  constructor(@Inject(PLATFORM_ID) private platformId:Object,@Optional() @Inject(SESSION_STORAGE) private storage:WebStorageService, private route: ActivatedRoute, private router: Router,private _service:ServicesService) { }

  optionsSelect=[]
  groupOptionsSelect=[]
  emailForm:FormGroup
  ngOnInit() {
  //console.log(this.storage);
    this.emailForm = new FormGroup({
    'name': new FormControl("",[
      Validators.required,
      Validators.maxLength(100)
    ]),
    'city': new FormControl("",[
      Validators.required,
      Validators.maxLength(100)
    ]),
    'phone': new FormControl("",[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15)
    ]),
    'email': new FormControl("",[
      Validators.required,
      Validators.maxLength(150)
    ]),

    'utm_source':new FormControl("",[

    ]),
    'utm_medium':new FormControl("",[

    ]),
    'utm_campaign':new FormControl("",[

    ]),

    'message': new FormControl("",[
      Validators.required,
      Validators.maxLength(280)
    ])

    })

  }

  get name(){
  return this.emailForm.get("name")
  }
  get city(){
  return this.emailForm.get("city")
  }
  get phone(){
  return this.emailForm.get("phone")
  }
  get email(){
  return this.emailForm.get("email")
  }
  get message(){
  return this.emailForm.get("message")
  }
  get option(){
  return this.emailForm.get("option")
  }
  ngOnDestroy(){

  }
  handleSubmit(event:any, emailDir:NgForm, emailForm:FormGroup){
  event.preventDefault()

  if (emailDir.submitted){
    let url = this.route.snapshot.url.pop();
    let option;
    //console.log("snapshot:"+this.route.snapshot.url.pop())
    let name = emailForm.value['name']
    let city = emailForm.value['city']
    let phone = emailForm.value['phone']
    let email = emailForm.value['email']
    let message = emailForm.value['message']
    let utm_source = emailForm.value['utm_source']
    let utm_medium  = emailForm.value['utm_medium']
    let utm_campaign = emailForm.value['utm_campaign']
    if(url === undefined)
      option = 'Homepage';
    else
      option = url.toString();

     if (isPlatformBrowser(this.platformId)) {

     }
    this._service.create(name, city, phone, email, message, option,utm_source,utm_medium,utm_campaign).subscribe(data=>{
      //console.log(data);
      this.hide()
      emailDir.resetForm({})

      this.router.navigate(['/thank-you']);
    })
  }
  }
  growActionBtns(){
    if(screen.width < 992){
    var container = document.getElementById('action-buttons-container');
    container.classList.remove('container', 'mt-3');
    container.classList.add('row');
    }
  }
}
