import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  fieldPasswordType:boolean = false;
  fieldConfirmPasswordType:boolean = false;  

  showHidePassword() {
    this.fieldPasswordType = !this.fieldPasswordType
  }
  
  showHideConfirmPassword() {
    this.fieldConfirmPasswordType = !this.fieldConfirmPasswordType
  } 
}
