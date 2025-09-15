# 07. Data Binding [ 09/09/2025 ]

---

## Data Binding

- Data Binding → Transmission of data from Component [ `.ts` file] to Template [ `.html` file] & Vice Versa
- Angular Supports both One-Way & Two-Way Data Binding

One-Way Data Binding:

1. Data is Sent/Transmitted from Component to Template 
    - This is done using:
        1. String Interpolation → A Way of Sending the data from Component into Template
            - Data will ALWAYS be Received in String Format Only
            - It uses `{{}}` double Flower Braces
            - This will be applied on Values
        2. Property Binding →  Another Way of Sending the data from Component into Template
            - Data WON’T be Received as a String
            - It uses `[]` double Square Braces
            - This will be applied on Properties
2. Data is Sent/Transmitted from Template to Component 
    - This is done using:
        1. Event Binding → A Way of Sending the data from Template into Component
            - It uses `()` Parenthesis
            - This will be applied on properties

Two-Way Data Binding:

- A Way of Sending the data from Component into Template && Template into Component
- Two Way data Transfer

Code

```html
<div id="product">
  <img src={{image_url}} alt={{product_name}}>
  <h3>{{product_name}}</h3>
  <p>Price: {{product_price}} </p>
  
  <!-- This below code uses "String Interpolation" => Only String Data -->
  <button disabled={{!isAvailable}} >Add to Cart</button>

  <br>
  <!-- This below code uses "Property Binding" => All types of Data -->
  <button [disabled]="!isAvailable" >Add to Cart</button>

  <br>
  <!-- This below code uses "Event Binding" => All types of Data -->
  <button (click)="button_click()" >Add to Cart</button> <br>
</div> 
```

<aside>
💡

NOTE:

---

Class Binding → `<p id="even-odd-banner" [class]="{'gr':isEven}">{{evenOdd}}</p>`

- here, binding happened via class →  `[class]="{'gr':isEven}"`
    - If the `isEven` value is `true` → Class value = ‘gr’
    - else class value = ‘’
</aside>

## Tasks

1. Print the count value from the Component in Template, 
    1. Upon button click value of count should increase. 
    2. Upon button click value of count should decrease. 
    3. Upon button click value of count should reset. 
2. In your Counter div, Based on the value of counter, put on a flag even/odd on the top right corner 

```jsx
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
  image_url = "https://images.samsung.com/is/image/samsung/
							  p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzkcins-
							  544702799?imbypass=true";
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

```

```html
<h2 style="margin: 20px;">Product</h2>
<div id="product">
  <img src={{image_url}} alt={{product_name}}>
  <h3>{{product_name}}</h3>
  <p>Price: {{product_price}} </p>
  <!-- This below code uses "String Interpolation" => Only String Data -->
  <button disabled={{!isAvailable}} >Add to Cart</button>

  <br>
  <!-- This below code uses "Property Binding" => All types of Data -->
  <button [disabled]="!isAvailable" >Add to Cart</button>

  <br>
  <button (click)="button_click()" >Add to Cart</button> <br>
</div> <br>

<!-- Counter App -->
<h2 style="margin: 20px;">Counter</h2>
<div id="task">
  <!-- Task -->
  <p id="even-odd-banner">{{evenOdd}}</p>
  <p>Users Visited : <strong>{{count}}</strong> </p>
  <button (click)="countIncrement()" [disabled]="isCount20">Increase</button>
  <button (click)="countDecrement()" [disabled]="isCount0">Decrease</button>
  <button (click)="countReset()">Reset</button>
</div>
```

```css
#product img {
    width: 300px;
}

#product {
    border: 2px solid black;
    width: fit-content;
    padding: 20px;
    margin: 20px;
}

#task {
    border: 2px solid black;
    width: fit-content;
    padding: 20px;
    margin: 20px;
    text-align: center;
}

#task button {
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
}
#task button:disabled {
    opacity: 0.3;
}

#task strong {
    font-size: 20px;
    color: darkblue;
}

#even-odd-banner {
    text-align: end;
}
```