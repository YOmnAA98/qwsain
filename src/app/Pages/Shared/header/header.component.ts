import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @ViewChild('closebutton') closeCollapsebutton;
  
  isVisible = false;  

  constructor(private router : Router){}
  
  goToPage(page:string){
    if(screen.width < 992)
      this.closeCollapsebutton.nativeElement.click();
    this.router.navigate([page])
  }
}