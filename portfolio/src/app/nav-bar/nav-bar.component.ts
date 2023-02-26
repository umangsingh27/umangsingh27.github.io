import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileService } from '../file.service';
import { NavBarInfo } from '../model/nav-bar-info.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Input() home: boolean = true;
  @Input() download: boolean = false;
  @Output() scrollTo = new EventEmitter<string>();
  @Output() downloadButtonClicked = new EventEmitter<boolean>();

  navBarInfo: NavBarInfo;

  constructor(private fileService:FileService,
              private location:Location) {}

  ngOnInit(): void {
    this.fileService.readFile('../../assets/json/nav-bar-info.json').subscribe(data => {
      this.navBarInfo = data as NavBarInfo;
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
