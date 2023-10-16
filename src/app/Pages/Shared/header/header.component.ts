import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isVisible = true;  
}

// $(window).scroll(function() {
//   $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });