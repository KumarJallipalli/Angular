// Number enums
enum days {
    sunday = 5,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
};

console.log(days.sunday);
console.log(days.friday);
console.log(days[3]);


// String enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
};

console.log(Direction.Up);
console.log(Direction["Left"]);


// Interface Objects
interface myObj {
    name: string,
    email: String,
    mobile_No?: number
}

let obj1 = {
    name: 25,
    email: 9458
}
// This won't throw error as TYPE is NOT defined

// let obj2:myObj = {
//     name: "Paris Hilton",
//     email: "parishamilton@email.com",
// }
// This will throw error as 3rd prop is NOT defined

let obj3:myObj = {
    name: "Paris Hilton",
    email: "parishamilton@email.com",
    mobile_No: 9999999999
}


// Interfaces extends
interface myObj2 extends myObj {
    age: number;
}

let obj4: myObj2 = {
    email: "Venus@a.com",
    name: "Venus",
    age: 25
}

interface Animal {
  name: string;            
  makeSound(): void;       
}

class Dog implements Animal {
  name;            

  constructor(name: string) {
    this.name = name;      
  }

  makeSound() {
    console.log("Woof!");
  }
}


// Type Alias
type myObj3 = {
    name: string,
    email: string,
    mobileNo: number
}

let obj5:myObj3 = {
    name:"Lewis",
    email: "lewis@a.com",
    mobileNo: 2536985568
}

type functionTemplate = (name:string) => void
let printName:functionTemplate = (xyz) => (`Name is: ${xyz}`);
printName("Paris");

function add (x: number, y:number): number {
    return x+y
}

// Normally, we define like this
let sum = (a: number, b: number): number => a + b
let sub = (a: number, b: number): number => a - b
let mul = (a: number, b: number): number => a * b
let div = (a: number, b: number): number => a / b

// Using type
type operations = (p:number, q: number) => number
let sum2:operations = (a, b) => a + b
let sub2:operations = (a, b) => a - b
let mul2:operations = (a, b) => a * b
let div2:operations = (a, b) => a / b