import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding');

  // Product App Code
  image_url = "https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzkcins-544702799?imbypass=true";
  product_name = "Samsung s25 Ultra";
  product_price = 125000;
  isAvailable = false;

  button_click () {
    alert("Button is Clicked");
  };

  // Counter App Code
  count: number = 0;
  isCount20:boolean = false;
  isCount0:boolean = true;

  countIncrement () {
    this.count++;
    this.count>=20 ? this.isCount20=true:this.isCount20=false;
    this.count>0 ? this.isCount0=false:this.isCount0=true;
    this.isEvenOdd();
  }
  countDecrement () {
    this.count--;
    this.count>=20 ? this.isCount20=true:this.isCount20=false;
    this.count>0 ? this.isCount0=false:this.isCount0=true;
    this.isEvenOdd();
  }
  countReset () {
    this.count = 0;
    this.isCount0 = true;
    this.isCount20 = false;
    this.isEvenOdd();
  }

  evenOdd = "NA";
  isEvenOdd () {
    if (this.count == 0) {
      this.evenOdd = "NA";
      return;
    }
    this.count%2===0 ? this.evenOdd="Even":this.evenOdd="Odd";
  }
}
