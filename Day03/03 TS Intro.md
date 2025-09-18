# 03. TS Intro [ 16/09/2025 ]

---

## TypeScript

- `TypeScript` → is a Scripting language alternative to JS
- TypeScript is Superset to JS → TypeScript = JS + Data Types
- TypeScript code must be compiled into JavaScript to run in browsers or Node.js.

```java
public class Person {
    // Fields
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method (Function)
    public String greet() {
        return "name: " + name + " and age: " + age;
    }
    
    // Main method to test
    public static void main(String[] args) {
        Person p = new Person("Alice", 30);
        System.out.println(p.greet());
    }
}
```

```jsx
class Person {
    name: string;    // Varibales must be decalared before use
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method (Function)
    greet(): string {
        return `Name: ${this.name} and age: ${this.age}`;
    }
}

// Example usage
const p = new Person("Alice", 30);
console.log(p.greet());
```

This is TS on right & Java on left

Hence, we say TS will provide Server Side Programming Experience

```jsx
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;    // Variables are created here
        this.age = age;      // No need to declare separately
    }

    // Method (Function)
    greet() {
        return `name: ${this.name} and age: ${this.age}`;
    }
}

// Example usage
const p = new Person("Alice", 30);
console.log(p.greet());
```

Here in JS, No need to declare Variables as they are created at runtime

Hence among TS & JS, TS will provide Server Side Programming Experience

## TS installation

- Installation command → `npm install -g typescript`
    - `-g` → Global
        - Install TS system wide [ Globally ]
        - We can run/use TS from any folder [ instead of current folder ]
- Version check Command → `tsc -v`

## TS Execution

- Create a TS file with `.ts` extension
- WKT, TypeScript code must be compiled into JavaScript to run in browsers or Node.js.
- Hence,
    - Convert TS to JS [ using the TypeScript compiler (`tsc`) ]  → `tsc fileName.ts`
        - TS Compiler will convert TS file to JS file
    - Execute JS file [ using node ] → `node fileName.js`
        - Node will run the JS file & Display the Output

Project wide execution

- `npx tsc --init` → initialize a TypeScript project
    - And creates a `tsconfig.json` file in your current directory
- Now Execute the required TS files using → `tsc fileName.ts`
- Else execute all TS files using → `tsc`

## What is `tsconfig.json`?

- `tsconfig.json` is the **configuration file** that contains Rules on how to compile your TypeScript code/file
- Using this file
    - You can modify this file to suit your project’s needs.
    - You can enforce project-wide compile settings.
    - You can compile the whole project just by running `tsc` (no need to specify files every time)
    - It's required by many build tools (e.g., Webpack, Vite) when using TypeScript.