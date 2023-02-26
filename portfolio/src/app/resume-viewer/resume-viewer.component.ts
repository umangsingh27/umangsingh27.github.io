import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { NavBarInfo } from '../model/nav-bar-info.model';

@Component({
  selector: 'resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.css']
})
export class ResumeViewerComponent implements OnInit{
  resumeLink:string = '';

  constructor(private fileService: FileService){}

  ngOnInit(): void {
    this.fileService.readFile('../../assets/json/nav-bar-info.json').subscribe(data=>{
      let navBarInfo = data as NavBarInfo;
      this.resumeLink = navBarInfo.resumeLink;
      console.log(this.resumeLink);
    });
  }
}
