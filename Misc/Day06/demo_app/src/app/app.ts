import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './movie-component/movie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Movie],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demo_app');
}
