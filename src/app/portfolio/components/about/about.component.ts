import { Component, input } from '@angular/core';
import { CvInfo } from '../../store/cvinfo.store';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent extends BaseComponent{

    cvinfo = input.required<CvInfo>();
}
