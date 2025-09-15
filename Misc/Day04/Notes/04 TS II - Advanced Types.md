# 04. TS II - Advanced Types [ 06/09/2025 ]

---

## enum

- `enum` → Allows you to define a set of **named constants**
    - Sometimes known as User Defined Type

`enum` with number type

- if no number is assigned → takes default initialization as 0
    - if Number is assigned → takes default initialization as that number
- Remaining elements will auto increment
- Numeric `enums` have Reverse Mapping
    - i.e., Generally, we can only access using dot notation [ just like objects ] → `days.sunday`
    - But with Numeric `enums` , we can access using bracket notation [ just like arrays ] → `days[0]`

```jsx
enum days {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
};

console.log(days.sunday);    // 0
console.log(days.friday);    // 5
console.log(days[3]);        // wednesday
```

```jsx
enum days {
    sunday = 5,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
};

console.log(days.sunday);    // 5
console.log(days.friday);    // 10
console.log(days[3]);        // undefined
```

WKT,

- `enum` is a TS type
- Then how come this will be Defined/Converted in JS ?
- It is converted to IIFE in JS
- And the Variable is Treated as Object

```jsx
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
```

```jsx
var days;
(function (days) {
    days[days["sunday"] = 5] = "sunday";
    days[days["monday"] = 6] = "monday";
    days[days["tuesday"] = 7] = "tuesday";
    days[days["wednesday"] = 8] = "wednesday";
    days[days["thursday"] = 9] = "thursday";
    days[days["friday"] = 10] = "friday";
    days[days["saturday"] = 11] = "saturday";
})(days || (days = {}));

console.log(days.sunday);
console.log(days.friday);
console.log(days[3]);
```

`enums` with Strings

- All the elements Must be initialized with String type
- No Auto Increment for String `enums`
- String `enums` also have Reverse Mapping

```jsx
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
};

console.log(Direction.Up);
console.log(Direction["Left"]);
```

```jsx
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));

console.log(Direction.Up);
console.log(Direction["Left"]);
```

<aside>
💡

NOTE:

---

- When **not** to use Enums?
    - In JS-heavy or React projects, developers often prefer **union types** instead:
    
    ```jsx
    type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
    ```
    
</aside>

`void` → means a function **does not return a value**. [ M**eaningful Value ]**

- But in JS, It implicitly returns `undefined`.

`never` → represents a value that **never occurs**.

- It is used when:
    - A function **never returns**
        - e.g.:
            - function that always throws an error or
            - function that runs forever
        
        ```jsx
        function throwError(message: string): never {
            throw new Error(message);
        }
        
        function infiniteLoop(): never {
            while (true) {}
        }
        ```
        
        - So `never` says: "This function will **never finish** or return anything — not even `undefined`."
    - A variable is **guaranteed to never hold a value**.

| Feature | `void` | `never` |
| --- | --- | --- |
| Meaning | No meaningful return value | No return at all — execution never completes |
| Used in | Functions that return `undefined` | Functions that throw or never finish |
| Return value | Can return `undefined` | Never returns |
| Assignable to | Can assign `undefined` | Cannot assign anything to `never` |
| Example | `function doSomething(): void` | `function fail(): never` |

## Interface

- **`interfaces`** are used to define the **structure of an object**
    - Interface are User defined types for Object

```jsx
// Interface Objects
interface myObj {
    name: string,
    email: String,
    mobile_No?: number
}
// Here, there shouldn't be an "=" synbol while definition
```

```jsx
let obj3:myObj = {
    name: "Paris Hilton",
    email: "parishamilton@email.com",
    mobile_No: "9999999999"
}
// This will Throw error as mobile_No is assigned a String
// It should be either a Number or no prop is defined
```

1. Interfaces can describe function signatures
    
    ```jsx
    interface Greet {
      (name: string): string;      // ( parameter ) : return_type
    }
    
    const greet: Greet = (name) => `Hello, ${name}`;
    ```
    

1. Interfaces can Inherit one or more interfaces → Extends
    
    ```jsx
    interface myObj {
        name: string,
        email: String,
        mobile_No?: number
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
    ```
    

1. Class Inherits another Interface → Implements
    
    ```jsx
    interface Animal {
      name: string;            // Says this is required
      makeSound(): void;       // Also required
    }
    
    class Dog implements Animal {
      name: string;            // You MUST define it to store the value
    
      constructor(name: string) {
        this.name = name;      // Assigning the value
      }
    
      makeSound() {
        console.log("Woof!");
      }
    }
    ```
    

<aside>
💡

NOTE:

---

- If a Class Inherits the Interface, then Keyword is `implements`
    - And if the class implements an Interface
        1. All the Properties must be defined again inside the class [ with type annotation ]
            - If you just declare the variable without type, then
                - Sometimes TS Compiler will Type Inference it to Correct type based on Interface type
                - But majorly, It will be type inferred to `any` → Hence, Throws Error
        2. All the functions must be defined [ WKT ]
- TS is defined in such a way
</aside>

## Type Alias → `type`

- `type` → Allows us to create Custom Types [ for all, i.e., primitives, objects, functions, unions etc.. ]
    - `interface` → Allows us to create custom types for Objects only
- `type` doesn’t have Inheritance [ Interface has Inheritance ]
    - But `type` has Intersection → Which is kind of similar but works for all [ instead of only interfaces ]
- `type` uses `=` symbol to create data type [ Interface doesn’t ]
    
    ```jsx
    type UserID = string;
    type Age = number;
    type Point = { x: number; y: number };
    
    let id: UserID = "abc123";
    let age: Age = 30;
    let location: Point = { x: 10, y: 20 };
    
    // Objects
    type User = {
      name: string;
      age: number;
    };
    
    // Unions
    type Status = "loading" | "success" | "error";
    let state: Status = "loading";
    
    // function template/signature
    type Greet = (name: string) => string;
    const sayHello: Greet = (xyz) => `Hello, ${xyz}`;
    ```
    

- Combining types → Intersection `&`
    
    ```jsx
    type HasID = { id: string };
    type HasName = { name: string };
    
    type Entity = HasID & HasName;
    
    let host: Entity = {
    		id: "#g08jask",
    		name: "Paris"
    }
    ```
    

Use case

```jsx
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
```

## type (vs) Interface

| Feature | `type` | `interface` |
| --- | --- | --- |
| Can define object shapes | ✅ | ✅ |
| Can be extended/merged | ❌ No merging | ✅ Interfaces can be merged |
| Can define unions and tuples | ✅ | ❌ Not directly |
| Best for functional types | ✅ | 🔶 Works, but less common |
| Preferred for class contracts | 🔶 Possible, but less flexible | ✅ Designed for that |

## `type` Intersection vs `interface` Inheritance

- Both **`type` intersections** and **`interface` inheritance** allow you to **combine multiple types**
    - **`interface`** is used to **extend** one or more interfaces into a new one.
        - **Use `interface`** when working with **objects, especially in OOP-style code**, or when you want **declaration merging**.
    - Type Intersection uses the **`&` operator** to combine multiple types (type aliases, not just interfaces).
        - **Use `type`** when you want **intersections**, **unions**, or to define **more complex** or **non-object** types.

<aside>
💡

NOTE:

---

- In TypeScript,
    - a function that returns `string` is assignable to a function type that returns `void`.
    - Not just `string` , but any return type can be assignable to a function type that returns `void`.
- Reasoning
    
    TypeScript is structurally typed. For function return types:
    
    - A function that returns `void` **can ignore** what the actual function returns.
    - In other words, **TypeScript ignores the returned value if the caller doesn’t care**.
</aside>

## Type Assertion

- In **TypeScript**, **type assertion** is a way to tell the compiler:
    
    > "Trust me, I know what I'm doing — this variable is of this specific type."
    > 
    - It **doesn’t** change the actual runtime behavior;
    - it’s purely a compile-time construct to help the TypeScript compiler understand the developer's intention.
- It Allows us to Override inferred type & tell compiler the type
- There are **two ways** to write a type assertion:
    1. **Angle-bracket syntax → `<Type>value`**
    2. **`as` syntax** (preferred, especially in React projects) → `value as Type`
    
    ```jsx
    let someValue: any = "Hello World";
    let strLength: number = (<string>someValue).length
    let strLength: number = (someValue as string).length;
    ```
    

## Tasks

1. Create an Object with `name`, `email`, `Ph No.` with it’s respective Interface
    
    ```jsx
    // Interface Objects
    interface myObj {
        name: string,
        email: String,
        mobile_No: number
    }
    
    let obj1 = {
        name: 25,
        email: 9458
    }
    // This won't throw error as TYPE is NOT defined
    
    let obj2:myObj = {
        name: "Paris Hilton",
        email: "parishamilton@email.com",
    }
    // This will throw error as 3rd prop is NOT defined
    
    let obj3:myObj = {
        name: "Paris Hilton",
        email: "parishamilton@email.com",
        mobile_No: 9999999999
    }
    ```
    

1. Create an Object with `name`, `email`, `Ph No.` with it’s respective Type Alias
    
    ```jsx
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
    ```
    

---

What happens in this code

```jsx
var days;
(function (days) {
    days[days["sunday"] = 5] = "sunday";
    days[days["monday"] = 6] = "monday";
    days[days["tuesday"] = 7] = "tuesday";
    days[days["wednesday"] = 8] = "wednesday";
    days[days["thursday"] = 9] = "thursday";
    days[days["friday"] = 10] = "friday";
    days[days["saturday"] = 11] = "saturday";
})(days || (days = {}));

console.log(days.sunday);
console.log(days.friday);
console.log(days[3]);
```

Each Line here : `days[days["sunday"] = 5] = "sunday";`

Does two things:

1. Assigns a numeric value to a string key: `days["sunday"] = 5`
2. Assigns a string key to a numeric index: `days[5] = "sunday"`

This allows **bi-directional mapping** (common for numeric `enums` in TS):

```jsx
days["sunday"]    // 5
days[5]           // "sunday"
```

This pattern is repeated for each day, incrementing the value by 1 each time.

Hence, we are able to do this [ for all elements ]

```jsx
days.sunday    // 5
days[5]        // "sunday"
```

At the end of this code, the `days` object looks like this:

```jsx
{
  5: "sunday",
  6: "monday",
  7: "tuesday",
  8: "wednesday",
  9: "thursday",
 10: "friday",
 11: "saturday",
  "sunday": 5,
  "monday": 6,
  "tuesday": 7,
  "wednesday": 8,
  "thursday": 9,
  "friday": 10,
  "saturday": 11
}
```