import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  scrollToSection(event: string){
    let element = document.getElementById(event);
    element?.scrollIntoView();
  }
}
