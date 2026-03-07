import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const backend = 'http://localhost:8080';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class App {
  protected readonly title = signal('portfolio-FE');
}
