import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent extends BaseComponent {
  
  readonly message = input<string>('');

  readonly mode = input<'fullscreen' | 'inline'>('fullscreen');

}
