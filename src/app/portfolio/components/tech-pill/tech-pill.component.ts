import { Component, computed, input } from '@angular/core';
import { CvInfo } from '../../store/cvinfo.store';
import { Stack } from '../portfolio-body/portfolio-viewmodel-types';

@Component({
  selector: 'app-tech-pill',
  imports: [],
  templateUrl: './tech-pill.component.html',
  styleUrl: './tech-pill.component.css',
})



export class TechPillComponent {
  readonly stack = input.required<Stack>();
  
  readonly pills = computed( () => {
    const pillsArr = Object.values(this.stack().stack);
    const pills: string[] = [];
    for ( let i = 0; i < pillsArr.length ; i++) {
      const arr = pillsArr[i];
      console.log(arr);
      for (let n= 0; n < 2 ; n++){
        if(arr[n]!= null){
          pills.push(arr[n]);
        }
      }
    }
    return pills;
  }
  );
  
}
  



