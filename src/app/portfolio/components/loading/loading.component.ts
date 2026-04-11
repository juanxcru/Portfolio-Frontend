import { Component, effect, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent extends BaseComponent {
  
  readonly message = input<string[]>(['']);

  readonly mode = input<'fullscreen' | 'inline'>('fullscreen');

  protected displayMessage = signal('');
  private timerId: any;

  constructor() {
    super();
    
    effect(() => {
      const msgs = this.message();
      if (msgs && msgs.length > 0) {
        this.displayMessage.set(msgs[0]);
        this.startRotation(msgs);
      }
    });
  }

  private startRotation(msgs: string[]) {
    this.stopRotation();
    if (msgs.length <= 1) return; 

    let index = 1;
    this.timerId = setInterval(() => {
      this.displayMessage.set(msgs[index]);
      index = (index + 1) % msgs.length;
    }, 4000); 
  
  }

  private stopRotation() {
    if (this.timerId) clearInterval(this.timerId);
  }

  ngOnDestroy() {
    this.stopRotation();
  }

}
