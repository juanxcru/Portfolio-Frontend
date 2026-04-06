import { Component, input } from '@angular/core';
import { CvInfo } from '../../services/cvinfo.store';
import { BaseComponent } from '../base-component.component';
import { Experience } from '../portfolio-body/portfolio-viewmodel-types';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent extends BaseComponent{

   readonly experience = input.required<Experience>();


}
