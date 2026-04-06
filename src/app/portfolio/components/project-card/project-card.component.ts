import { Component, input } from '@angular/core';
import { ProjectInfo } from '../../services/projectinfo.store';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {

   readonly project = input.required<ProjectInfo>();

   log(){
    console.log(this.project());
   }

}
