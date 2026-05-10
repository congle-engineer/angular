import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: `<h1>Hello World!</h1>`,
  // styleUrl: './app.css',
  styleUrls: ['./app.css']
})
export class App {
  // protected readonly title = signal('angular');
  titles = 'homes';
}
