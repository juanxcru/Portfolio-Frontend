import { Component, input } from '@angular/core';
import { CvInfo } from '../../store/cvinfo.store';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent extends BaseComponent{

    cvinfo = input.required<CvInfo>();


}
