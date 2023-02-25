import { Component, Input, OnInit} from '@angular/core';
import { Project } from '../model/project.model';

@Component({
  selector: 'project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit{
  @Input() project: Project;
  
  ngOnInit(): void {
    if(!this.project.image){
      this.project.image = '../assets/images/thumbnail/dummy.png';
    }

    if(!this.project.primaryColorCode){
      this.project.primaryColorCode = '#303030';
    }
  }
  
}
