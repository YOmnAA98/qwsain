import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-course-tutorial',
  templateUrl: './course-tutorial.component.html',
  styleUrls: ['./course-tutorial.component.css']
})
export class CourseTutorialComponent {

  // toast function
  name = 'Angular ' + VERSION.major;
  @ViewChild('myToast', { static: true }) toastEl!: ElementRef<HTMLDivElement>;
  toast: Toast | null = null;

  ngOnInit() {
    this.toast = new Toast(this.toastEl.nativeElement, {});
  }

  show() {
    this.toast!.show();
  }

  // copy code function
  code = `<!doctype html>
  <html>
    <head>

    </head>
    <body>
    
    </body>
  </html>`;

  copyCode() {
    const codeCopy = document.createElement('textarea');
    codeCopy.value = this.code;
    document.body.appendChild(codeCopy);
    codeCopy.focus();
    codeCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeCopy);
  }
}
