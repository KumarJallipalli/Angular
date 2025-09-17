# 02. Overview [ 15/09/2025 ]

---

## Topics Overview

- Typescript
- Components in Angular
- Data Binding in Angular
- Directives and Custom Directives
- Pines and Custom Pipes
- Component Life Cycle Hooks
- Component Communications
- Services + RxJS (Reactive Extension for JavaScript)
    - Real world APIs
    - Angular + (Java/ .NET)
- Forms and Validations
- Single Page Applications
    - Routing
    - Child Routing
    - Route Parameters
    - Route Guards

## Environment

- `Environment` → A Platform required to Develop, Build & Run the Applications
- To Run Angular Applications, we require
    - NodeJS → To Execute JS [ Code ]
    - npm Package Manager → To install, update, modify & delete the packages/Dependencies
    - TypeScript → Angular Implements/Uses TypeScript
    - Angular CLI → powerful CLI tool used to **create, build, test, and manage Angular projects**
    - VS Code → To Write Code

## What is Node JS..?

- `Node.js`  → Node JS is a JavaScript Runtime built on Chrome’s V8 JS Engine
- Node JS lets us Execute the JS code outside the Browser
- Node JS is Open Source & Cross-Platform
- Node JS has an Event-Driven Architecture capable of Asynchronous I/O [ aka Non-Blocking I/O ]

## `npm`

- `npm` is a software registry [ World’s Largest Registry ] and
- `npm` **is default package manager for Node.js**,
    - `package Manager` → used to **install, update, delete & manage dependencies (libraries, tools, and frameworks)** in JavaScript projects.

`npm` consists of three distinct components:

1. the registry → A large public database of JS Packages/Software's
2. the website → Used to discover & Public Packages
3. the Command Line Interface (CLI) → Used to Interact with `npm` from a Terminal

## TypeScript

- `JavaScript` → Scripting Language used to build Dynamic Web Pages
    - JS is Dynamically Typed Language → NOT a Type Safe
    - JS is Interpreted Language → No Syntax/Compilation Errors, Only Runtime Errors
    - JS is NOT a Proper OOP Language → Not Secure, Not Re-Usable & Not Maintainable
- `TypeScript` Addresses all the above issues
    - TS is Superset of JS → JS + Types
    - TypeScript code must be compiled ( or transpiled ) into JavaScript to run in browsers or Node.js.
    - TS is NOT a replacement to JS, But an Alternative to JS [ which helps in faster Development Speeds ]

## Visual Studio Code

- VS Code is a Light Weight IDE tool which can be used to build frontend applications.
- VS Code is provide different features like:
    - IntelliSence
    - Debug features
    - SCM(Source code management tools like Git)
    - Major Third Party Extension Tools
    - Cross platform IDE (Windows, Mac)
    - Cross technology IDE (Java, .NET, React, Angular etc.)

<aside>
💡

NOTE:

---

- `Static Web Pages` → Content of the Web Page is Fixed/Static for all User Requests → Content Doesn’t Change
- `Dynamic Web Pages` → Content of the Web Page is Dynamic [ Content of the Page is Generated in Real-Time ] based on User Request → Content Changes
</aside>

## Angular

- **Angular is a Frontend Framework used to build Web Applications [ dynamic, single-page applications (SPAs) ]**
- **Angular uses TypeScript → TypeScript-based framework**
- **Angular is a development platform →** i.e., it provides Platform/Tools for development, debugging, Testing & Deployment
- Angular is **open-source and is** Developed & Managed by Google

**single-page applications** (SPAs) → apps that load once and update instantly without Reloading the page

Key Concepts

| Concept | Meaning |
| --- | --- |
| **Component** | A piece of the page (like a button, form, or menu) |
| **Template** | What the component looks like (HTML) |
| **Class** | The behavior behind the component (JavaScript/TypeScript code) |
| **Module** | A group of components that work together |
| **Service** | A helper that shares code or data across parts of your app |
| **Routing** | Navigating between pages without refreshing the whole page |