import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie {
  protected readonly title = signal('demo_app');
}