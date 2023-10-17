import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  fieldPasswordType:boolean = false;
  fieldConfirmPasswordType:boolean = false;  

  showHidePassword() {
    this.fieldPasswordType = !this.fieldPasswordType
  }
  
  showHideConfirmPassword() {
    this.fieldConfirmPasswordType = !this.fieldConfirmPasswordType
  } 
}
