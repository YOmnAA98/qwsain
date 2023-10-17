import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isVisible = true;  

  // @HostListener('window:scroll', [$event])
  // onWindowScroll(e:any){
  //   if(e.target['scrollingElement'].scrollTop < 100){
  //     document.getElementsByClassName("header")[0].classList.remove('h-shadow');
  //   }
  //   else{
  //     document.getElementsByClassName("header")[0].classList.remove('h-shadow');
  //   }
  // }
}