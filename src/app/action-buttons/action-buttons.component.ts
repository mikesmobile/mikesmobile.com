import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { ServicesService } from '../services/service.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass'],
  providers: [ServicesService]
})
export class ActionButtonsComponent implements OnInit {
  toppings = new FormControl();

  optionsSelect=[]
  emailForm:FormGroup
  @ViewChild(QuoteFormComponent) private quoteForm:QuoteFormComponent;
  toggleQuoteForm(){
    this.quoteForm.show()
}
  constructor(private _service:ServicesService) { }

  ngOnInit() {
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
        'message': new FormControl("",[
            Validators.required,
            Validators.maxLength(280)
        ]),
        'option': new FormControl("", Validators.required)
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

  handleSubmit(event:any, emailDir:NgForm, emailForm:FormGroup){
    event.preventDefault()
    if (emailDir.submitted){
        //console.log(emailForm.value)
        let name = emailForm.value['name']
        let city = emailForm.value['city']
        let phone = emailForm.value['phone']
        let email = emailForm.value['email']
        let message = emailForm.value['message']
        let option = emailForm.value['option']
        this._service.create(name, city, phone, email, message, option).subscribe(data=>{
          //console.log(data)
        })
        emailDir.resetForm({})
    }

  }

  hideShowSearch(){
      var searchInput = document.getElementById('search-input');

      document.getElementById('search-button').classList.toggle("orange");

      if (searchInput.style.display === "none") {
          searchInput.style.display="inline";
          searchInput.style.width="100%";
      } else {
          searchInput.style.display="none"
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
