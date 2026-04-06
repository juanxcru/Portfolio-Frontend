import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { BaseComponent } from '../base-component.component';
import { ProjectInfo, ProjectInfoStore } from '../../services/projectinfo.store';


@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent  extends BaseComponent{

  private projectStore = inject(ProjectInfoStore);

  readonly projects = computed<ProjectInfo[]>(() => {
    const value = this.projectStore.projectsInfo();
    if (!value) {
      console.error("projectinfo not loaded");
      throw new Error('projectihfo not loaded');
    }
    return value;
  })




  



}
