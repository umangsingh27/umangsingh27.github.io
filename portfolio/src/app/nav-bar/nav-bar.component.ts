import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileService } from '../file.service';
import { Intro } from '../model/intro.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() home: boolean = true;
  @Input() download: boolean = false;
  @Output() scrollTo = new EventEmitter<string>();
  @Output() downloadButtonClicked = new EventEmitter<boolean>();

  navBarInfo: Intro = new Intro();

  constructor(private fileService:FileService,
              private location:Location) {
    this.fileService.readFile('../../assets/json/intro.json').subscribe(data => {
      this.navBarInfo = data as Intro;
    });
  }
  
  public scrollToSection(elementId: string) {
    this.scrollTo.emit(elementId);
  }

  public downloadClicked(){
    this.downloadButtonClicked.emit(true);
  }

  public goBack() {
    this.location.back();
  }

}
