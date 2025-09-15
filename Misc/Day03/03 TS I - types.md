# 03. TS I - types [ 05/09/2025 ]

---

## What is TypeScript

- **TypeScript** is a **programming language** developed and maintained by **Microsoft**.
- TypeScript  is superset of JavaScript
    - i.e., TS is JS with added features [ mainly **static typing ]**
- TypeScript is a statically typed
    - allows you to define **data types** for variables, function parameters, return values, and more
- TypeScript code must be compiled ( or transpiled ) into JavaScript to run in browsers or Node.js.
- TypeScript helps with Better developer experience by **Reduces bugs** via catching type-related errors early

## Commands

- Install → `npm i -g typescript`
    - `-g` → Global → To Access TS in every folder
- `tsc -v` → Checks Version
- `npx tsc --init` → initialize a TypeScript project
    - And creates a `tsconfig.json` file in your current directory

## What is `tsconfig.json`?

- `tsconfig.json` is the **configuration file** that contains Rules on how to compile your TypeScript code/file
- Using this file
    - You can modify this file to suit your project’s needs.
    - You can enforce project-wide compile settings.
    - You can compile the whole project just by running `tsc` (no need to specify files every time)
    - It's required by many build tools (e.g., Webpack, Vite) when using TypeScript.

## TS execution

- To execute a `.ts` (TypeScript) file,
    - you first need to **compile** it into JavaScript using the TypeScript compiler (`tsc`) →  `tsc script.js`
    - and then **run the resulting JavaScript** using something like **Node.js**. → `node script.js`

## Data Types in TS

- We can define data types in TS using 2 Ways
    1. Type Annotation → Explicit type defining → `let name: string = "Sam";`
    2. Type Inference → Implicit type defining → `let name = "Sam";` [ only String types are allowed for re-initializing name variable ]

| Type | Description | Example |
| --- | --- | --- |
| `string` | Textual data | `let name: string = "Sam";` |
| `number` | Numeric values (int, float, etc.) | `let age: number = 25;` |
| `boolean` | True or false | `let isActive: boolean = true;` |
| `null` | Null value | `let n: null = null;` |
| `undefined` | Undefined value | `let u: undefined = undefined;` |
| `bigint` | Large integers | `let big: bigint = 123n;` |
| `symbol` | Unique identifiers | `let sym: symbol = Symbol();` |

| Type | Description | Example |
| --- | --- | --- |
| `any` | Opts out of type checking | `let value: any = 5; value = "hello";` |
| `unknown` | Like `any`, but safer (must be type-checked) | `let input: unknown = "text";` |
| `never` | Represents values that never occur (e.g., errors) | `function fail(): never { throw new Error(); }` |
| `void` | No return value (used for functions) | `function log(): void { console.log("Hi"); }` |
- union `|`:
    - It Allows us to hold multiple data types [ for a variable ]
    - Syntax → `let val: number | String | boolean = "Paris"`
        - `val` can have any of the 3 types

- `any`:
    - It Allows us to opt out of type Checking [ for a Variable ]
    - i.e., ANY It Allows us to hold data types [ just like in JS ]
    - Syntax → `let value: any = true;`
        - `val` can have any type

- Arrays `[]` :
    - It Allows us to define types for Array Elements
        - i.e., allows us to define type for all elements together ]
    - Syntax → `let value: number[] = true;`
        - `val` can have only numbers as array elements
    - Arrays with union
        - `let value: ( number | string )[] = true;` → can hold both numbers & string types
    - Multi-dimensional arrays:
        - `let matrix: number[][] = [ [1, 2], [3, 4] ]`

- `Tuple` :
    - A **tuple** is a special type of array in TypeScript where:
        - The **number of elements is fixed**, and
        - The **types of each element is fixed [ individually ]**
    - It Allows us to define types for individual elements
    - A tuple can have Fixed Elements with **types defined in a specific order**.
        - `let user: [string, number] = ["Alice", 30];`
        - It can have only 2 elements &&
            - 1st element must be String
            - 2nd element must be number
    - We can define `type` & use it
        
        ```jsx
        type Person = [name: string, age: number];
        let person: Person = ["Alice", 30];
        ```
        
    - Tuples with Optional `?`
        
        ```jsx
        let data: [string, number?];
        data = ["Hello"];       // OK
        data = ["Hello", 42];   // OK
        // We can only have number as 2nd element or no element
        ```
        
    - Tuple with Rest Elements
        
        ```jsx
        let logs: [string, ...number[]];
        logs = ["Log1", 1, 2, 3];   // OK
        ```
        

<aside>
💡

What is the **`?` (Optional)** in TypeScript?

- **`?` symbol** is used to indicate that a **property, parameter, or element is optional**
    - i.e., it **may or may not be present**.
    - If it presents, it must be of specified type
- Optional parameters must come **after** required ones.
    - i.e., you cannot define optional element 1st & then define the required one later → `X`
- We have a Concept called Optional Chaining [ But can be discussed later ]
</aside>

Function Type:

- Every Functions needs to define it’s types for
    - parameters and
    - return values
- `void` → Used to define a function return type when function returns nothing

```jsx
function add(a: number, b: number): number {
  return a + b;
}
add(2, 5)
```

- same is the case with Arrow Functions
    
    ```jsx
    function add = (a: number, b: number): number => {
      return a + b;
    }
    add(2, 5)
    ```
    
- Function with optional parameter
    
    ```jsx
    function add = (a: number, b?: number): number => {
      return a + b;
    }
    add(2)      // if "?" is not mentioned, this throws ERROR
    add(2, 5)   // both works
    ```
    

## Tasks

1. create a variable "name" which accepts number or
string and create a variable value which accepts any data
type and print their types in console
2. Create an Array which Accepts Stings & Numbers only