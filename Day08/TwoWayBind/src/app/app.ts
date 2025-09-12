import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TwoWayBind');

  val:any;
  inputValue () {
    const ele = document.getElementById('o-w') as HTMLInputElement ;
    this.val = ele.value;
    alert(this.val);
  }

  twoWayBindVal: any;
}
