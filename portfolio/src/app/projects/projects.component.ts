import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { FileService } from '../file.service';
import { Project } from '../model/project.model';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects:Project[];
  archivedProjects: boolean = false;
  constructor(private fileService:FileService, 
              private route: ActivatedRoute){
    this.fileService.readFile('../assets/json/projects.json').subscribe(data=> {
      this.projects = data as Project[];
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((value)=>{
      if(value){
        this.archivedProjects = value['archived']=='archived';
      }
    });
  }

}
