# 01. Intro [ 03/09/2025 ]

---

## Why Angular ?

- To build Frontend Web Pages ..!
- Then, Can’t we build the same using HTML, CSS & JS ?
    - Yes, [ We can build both Static & Dynamic We Pages ]
- Then Why Angular ..?
    - To Build SPA [ Single Page Applications ]
    - We Can’t build SPA using HTML, CSS & JS
- Hence we require Angular to build SPA [ where performance & Responsiveness is Key ]

## What is SPA

- SPA → Single Page Applications
- SPA → Application that loads Single HTML Page
    - Navigation between "pages" & updates to contents happens Dynamically [ Using JS ] without reloading the entire page
- Adv → When moving from one page to another, Application doesn’t reload [ NASA website (vs) React website ]
- Concept
    1. Initial Load → Browser loads one main HTML file [ plus JavaScript and CSS assets ]
    2. Dynamic Content 
        - Navigation between "pages" happens via **JavaScript [ V.IMP ]**
        - JS updates parts of the page using data fetched from the server — without a full page refresh.
    3. Client Side Routing
        1. SPAs use **JavaScript-based routers** (like React Router) to switch views based on the URL
        2. In doing so, It doesn’t request a new page from the Server

## Angular

- Angular is a **full-fledged front-end Framework**
    - It is designed to build SPA & PWA [ Progressive Web Applications ]
- Angular is Developed by Google

## Difference between Angular & React

- `React` → A JS library for building UI
- `Angular` → A Developer’s Platform & a Framework
    - Developer’s Platform → Provides End to End solution
    - i.e., it provides Platform/Tools for development, debugging, Testing & Deployment

| Feature/Aspect | React | Angular |
| --- | --- | --- |
| Type | Library | Framework |
| Language | JavaScript (JSX), TypeScript optional | TypeScript (mandatory) |
| Architecture | Unopinionated / Flexible  | Opinionated / structured |
| Data Binding | One-way | Two-way and one-way |
| DOM | Virtual DOM | Real DOM + change detection |
| Best For | Lightweight SPAs, custom stacks | Enterprise-scale apps, complex systems |

## Where to use React & Angular

- React
    - When you require flexibility, control, Customization & high performance SPA for real-time UIs
        - As React is Unopinionated → You can choose your own libraries for routing, state management, etc.
        - Ideal if you want to build your stack *your way*.
        - And When there is a Framework already & only needs frontend UI
- Angular
    - When you are building large-scale enterprise apps using TS with a complete, opinionated framework
        - As Angular is Opinionated → No, Control, Customization, Flexibility
    - If you don’t have a framework (or) you want purely client-side based application rather than server-side

## `npm`

- `npm` is a software registry [ World’s Largest Registry ] and
- `npm` **is default package manager for Node.js**,
    - `package Manager` → used to **install, update, delete & manage dependencies (libraries, tools, and frameworks)** in JavaScript projects.

`npm` consists of three distinct components:

- the registry → A large public database of JS Packages/Software's
- the website → Used to discover & Public Packages
- the Command Line Interface (CLI) → Used to Interact with `npm` from a Terminal

<aside>
💡

**`Library`** → Provides collection of pre-written code with which developers can perform tasks [ without writing code from scratch] 

- It is a collection of functions, classes etc..

`Framework` → standardized structure that provides a platform on which developers can build software applications.

- It is a collection of tools, libraries etc..
</aside>

## Library ( vs ) Framework

- `Library` → A **library** is a collection of pre-written code (functions, classes, etc.) used to perform specific tasks.
    - You control the flow of your application — you call the library when you need it
- `Framework` → A **framework** is a **platform** [ with predefined structure ] for building applications.
    - predefined structure  → It defines **how your code should be written and organized**.
    - **framework** control the flow of your application — it **calls your code** when needed  [ This is known as **Inversion of Control ]**