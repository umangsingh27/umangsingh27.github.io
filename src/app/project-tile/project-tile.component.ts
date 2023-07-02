import { Component, Input, OnInit} from '@angular/core';
import { Project } from '../model/projects.model';

@Component({
  selector: 'project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit{
  @Input() project: Project;

  static readonly descriptionLimit:number = 470;
  
  ngOnInit(): void {
    if(!this.project.image){
      this.project.image = '../assets/images/thumbnail/dummy.png';
    }

    if(!this.project.primaryColorCode){
      this.project.primaryColorCode = '#303030';
    }

    if(this.project.description.length>470){
      this.project.description = this.project.description.substring(0, 470);
      this.project.description = 
        this.project.description.substring(0, 
          this.project.description.lastIndexOf(' ')
        ) + '...';
    }
  }
  
}
