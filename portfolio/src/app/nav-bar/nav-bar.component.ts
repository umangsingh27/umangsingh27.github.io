import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
  @Input() home: boolean = true;
  @Output() scrollTo = new EventEmitter<string>();

  constructor(private location:Location){}
  
  public scrollToSection(elementId: string) {
    this.scrollTo.emit(elementId);
  }

  public goBack() {
    this.location.back();
  }

}
