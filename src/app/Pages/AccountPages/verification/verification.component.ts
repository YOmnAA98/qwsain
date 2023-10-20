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
  
  onCodeCompleted(code: string) {
  }
}
