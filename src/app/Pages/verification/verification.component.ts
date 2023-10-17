import { Component, ViewChild } from '@angular/core';
import { CodeInputComponent } from 'angular-code-input';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  onCodeChanged(code: string) {
  }
  
  // this called only if user entered full code
  onCodeCompleted(code: string) {
  }
  // @ViewChild('codeInput') codeInput !: CodeInputComponent;
  // this.codeInput.reset();
}
