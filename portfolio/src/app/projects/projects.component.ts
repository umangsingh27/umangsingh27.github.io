import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { Project } from '../model/project.model';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects:Project[];
  constructor(private fileService:FileService){}

  ngOnInit(): void {
    this.fileService.readFile('../assets/projects.json').subscribe(data=> {
      this.projects = data as Project[];
    });
  }

}
