import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileService } from '../file.service';
import { Intro } from '../model/intro.model';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  videoResumeLink:string= '';
  safeUrl:any;
  autoplay:boolean = true;

  constructor(private sanitizer:DomSanitizer, 
              private fileService:FileService) {
    this.fileService.readFile('../../assets/json/intro.json').subscribe((data)=> {
      let info_object = data as Intro;
      this.videoResumeLink = info_object.videoResumeLink;
      // console.log(this.videoResumeLink);
      if(this.videoResumeLink && this.autoplay){
        this.videoResumeLink = this.videoResumeLink + '?&autoplay=1';
      }
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoResumeLink);
      // console.log(this.safeUrl);
    });
  }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
}
