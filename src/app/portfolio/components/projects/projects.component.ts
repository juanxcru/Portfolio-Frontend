import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent  extends BaseComponent{

}
