import { Component, input } from '@angular/core';
import { CvInfo } from '../../store/cvinfo.store';
import { BaseComponent } from '../base-component.component';
import { BioData, Stack } from '../portfolio-body/portfolio-viewmodel-types';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent extends BaseComponent{

    readonly bioData = input.required<BioData>();
    readonly stack = input.required<Stack>();
    
}
