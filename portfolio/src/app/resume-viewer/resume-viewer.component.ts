import { Component } from '@angular/core';
import { FileService } from '../file.service';
import { NavBarInfo } from '../model/nav-bar-info.model';
import { saveAs } from 'file-saver';

@Component({
  selector: 'resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.css']
})
export class ResumeViewerComponent {
  resumeLink:string = '';

  constructor(private fileService: FileService){
    this.fileService.readFile('../../assets/json/nav-bar-info.json').subscribe(data=>{
      let navBarInfo = data as NavBarInfo;
      this.resumeLink = navBarInfo.resumeLink;
    });
  }

  downloadResume(downloadClicked:boolean) {
    if(downloadClicked){
      this.fileService.downloadFile(this.resumeLink).subscribe((data:Blob | MediaSource) => {
        let downloadURL = window.URL.createObjectURL(data);
        saveAs(downloadURL, 'Umang_Singh_Resume.pdf');
      });
    }
  }
}
