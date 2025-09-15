# 05. TS III - Angular Install [ 17/09/2025 ]

---

## Access Modifiers

- **access modifiers** (also called **access specifiers**) → control the **visibility and accessibility** of class members like **properties**, **methods**, and **constructors**.

| Modifier | Description |
| --- | --- |
| `public` | Accessible from **anywhere** (default) |
| `private` | Accessible **only within the class** where it is defined |
| `protected` | Accessible within the **class and its subclasses** |

| Modifier | Accessible within class | Accessible in subclass | Accessible outside |
| --- | --- | --- | --- |
| `public` | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ❌ |
| `private` | ✅ | ❌ | ❌ |
- `read-only`
    - It makes a property **read-only** after initialization.
    - A `readonly` property can **only be assigned once**, either:
        - When declared, or
        - In the constructor.
    - After that, it’s **immutable** (read-only).
- `static`
    - A `static` member **belongs to the class itself**, **not** to any instance.
        - `static` members are Associated with Class [ But not with Objects ]
        - `static` members are Accessed directly by Class [ But not by Objects ]
    - You access it using the **class name**, not `this`.

## Generics

- `generics` → Allows you to define **placeholder types** (like `T`, `U`, etc.)
    - which get **replaced with real types** when the function/class/Interface is used

```jsx
function identity<T>(value: T): T {
  return value;
}

// Usage
const num = identity<number>(123);   // T = number
const str = identity<string>("hi");  // T = string

const auto = identity(true);         // TypeScript infers T = boolean
```

1. You can constrain what types are allowed for a generic type using `extends`
    
    ```jsx
    function logLength<T extends { length: number }>(item: T): void {
      console.log(item.length);
    }
    
    logLength("hello");         // ✅ string has length
    logLength([1, 2, 3]);       // ✅ array has length
    // logLength(123);          // ❌ Error: number doesn't have length
    ```
    

1. Multiple Generics at a time
    
    ```jsx
    function merge<T, U>(obj1: T, obj2: U): T & U {
      return { ...obj1, ...obj2 };
    }
    
    const merged = merge({ name: "Alice" }, { age: 30 });
    console.log(merged.name, merged.age); // ✅ name and age are both accessible
    
    ```
    

## Declaration Files

- It Allows us to define types for 3rd party libraries
- extension → `.d.ts`

## Decorators

- **decorators** are a special kind of **declaration** `@` used to **modify or enhance one’s behavior**
- These are majorly used in Frameworks like Angular & Nest.js

## Scaffolding

- **`scaffolding`** refers to the **automatic generation of code structures** (like components, services, modules, etc.) using `Angular CLI` commands
- When you use Scaffolding via Angular CLI to generate files, it automatically:
    - Creates the necessary files (e.g., `.ts`, `.html`, `.css`, `.spec.ts`)
    - Inserts boilerplate code
    - Registers components in a module (if needed)
    - Follows Angular style and naming conventions

## Angular Install & Setup

Angular Install:

1. Install `npm` 
    1. check it’s version → `npm -v`
2. install Angular CLI for Scaffolding → `npm i -g @angular/cli`
    1. Check it’s version → `ng v`

<aside>
💡

NOTE:

---

- `Angular: <error>`
- This Line of Code is seen when you check angular cli version → `ng v`
- This may be due to :
    1. You haven't created or initialized an Angular project yet
    2. The `@angular/core` package is missing or not properly installed
    3. Corrupted or partial `node_modules` or `package.json`
</aside>

Angular App Setup:

1. `ng new app_name --standalone=false`
2. Select CSS
3. Select SSR & SSG → NO
4. For now ignore `zone.js` & AI tools

Run the App:

- `cd app_name` → Change Directory to App Folder
- `ng server` → Starts the App
    - `ng server --open` → Starts the App & Opens the App
    - Default PORT → `4200`
- `ctrl + c` → Stops the App

<aside>
💡

NOTE:

---

- use `ng complete` to enable auto completion of Angular CLI commands
</aside>

## Project Structure

-