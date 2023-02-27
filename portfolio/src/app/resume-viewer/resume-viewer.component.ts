import { Component } from '@angular/core';
import { FileService } from '../file.service';
import { Intro } from '../model/intro.model';
import { saveAs } from 'file-saver';

@Component({
  selector: 'resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.css']
})
export class ResumeViewerComponent {
  resumeLink:string = '';

  constructor(private fileService: FileService){
    this.fileService.readFile('../../assets/json/intro.json').subscribe(data=>{
      let navBarInfo = data as Intro;
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
