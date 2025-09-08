# 06. Angular Project Structure [ 07/09/2025 ]

---

## Project Structure

`tsconfig.json` → Config file which contains Rules on how to Compile the TS file

- `tsconfig.json` → Defines Rules Globally for the entire workspace
    - Acts as the **base config** that other configs (`tsconfig.app.json`, `tsconfig.spec.json`) extend.
- `tsconfig.spec.json` → Defines Rules specifically for applications
- `tsconfig.app.json` → Defines Rules specifically for Tests [ Unit Testing ]

`README.md` → Contains Project Description

`package.json` → Contains metadata about the project [ and Scripts, Dependencies etc.. ]

`package-lock.json` 

- Contains metadata about the `package.json`
- i.e., It Maintains Dependencies of the Dependencies [ i.e., Nested Dependencies ]
- **And It locks the exact versions** of every installed package & it’s nested dependencies.

`.gitignore` → Contains Files & Folders that Git should ignore

`angular.json` 

- the **main configuration file** for the Angular CLI.
- It defines how Angular CLI should `build`, `serve`, `test`, and `lint` your application.

`.editorconfig` 

- Defines Rules for Editor
- It helps maintain **consistent coding styles/Rules** (indentation, line endings, etc.) **across different editors and IDEs**

`node_modules` → **directory** which contains **all the installed dependencies** [ & their nested dependencies ] listed in `package.json`

**`public`**

- The `public` folder contains **static files** that are served directly to the browser.
- These files are NOT Processed by Built Tools [ Copied as it is ]

**`src`**

- The `src` folder contains all your **application Source Code**
- These files are Processed by Built Tools

`main.ts` 

- **It is the Entry Point for Angular Application**
- It Bootstraps the Angular App with the root module (`AppModule`)
    - **bootstrapping** refers to the process of **initializing/launching an Angular application**

`styles.css` 

- This is the **global stylesheet** for your Angular app.
- Styles defined here affect the entire application (unless overridden)

`index.html` 

- This is the Main **HTML page** that gets served to the browser.
- It contains the `<app-root></app-root>` element, which Angular **replaces** with `AppComponent.ts` (or) `app.ts`
- Angular takes over from here.

```jsx
app/
├── app.component.ts
├── app.component.html
├── app.component.css
├── app.component.spec.ts
├── app.module.ts
├── app-routing.module.ts
```

`app.component.ts` – **Root Component Logic** 

- Contains the **`AppComponent` Logic & Metadata**
- Acts as the starting/Entry point for rendering the UI.
- It Renders the `app.component.html`

`app.component.html` – **Root Component Template** 

- Contains the **HTML structure** (template) for the root component.

`app.component.css` – **Root Component Styles**

- Component-specific styles for `AppComponent`.

`app.component.spec.ts` – **Root Component Unit Testing**

- Contains **unit tests** for `AppComponent`, using **Jasmine** by default.

`app.module.ts` – **Main App Module**

- Defines the **root Angular module** (`AppModule`)
- It Declares components, imports other modules, and bootstraps the root component.

`app-routing.module.ts` – **Routing Configuration**

- Handles **client-side routing** (navigation between components/pages).
    - A **dedicated module** for defining application routes
    - Keeps routing logic separate from `AppModule` for clarity.

## What Happens when Angular app starts

1. Browser Loads the `index.html` file (which contains a `<app-root>` or similar custom element).
    - This is the main HTML file where Angular uses to insert your Angular application into the page.
2. Webpack Runs `angular.json`
    - `angular.json` Specifies the **entry point** of the app via `architect.build.options.main`, which points to `main.ts`.
3. Angular Loads the main `main.ts` file.
    - `main.ts` is the **entry point** of your Angular app.
        - Contain `platformBrowserDynamic().bootstrapModule(AppModule)`.
        - `platformBrowserDynamic()` tells Angular to compile the Angular app in the browser.
            - Then, It bootstraps the Angular Application
            - Hence, Loads the **root module** (`AppModule`) and starts the app
4. Angular Loads `AppModule` (Root Module)
    - The `AppModule` Specifies which **component** will be the **root component** (typically `AppComponent`).
    - It uses `bootstrap: [AppComponent]` to specify the Root Component
5. Angular Loads `AppComponent` (Root Component)
    - Contains the `@Component` decorator with:
        - `selector` → custom HTML tag for the component
            - `selector: 'app-root'` matches the `<app-root>` tag in `index.html`.
        - `templateUrl` → path to the HTML file → That HTML File will be Rendered for UI
        - `styleUrls` → path(s) to CSS/SCSS file
    - the Template HTML File will be Rendered in the place of `<app-root>`
6. Finally Angular Renders the UI by replacing the root selector (`<app-root>`) in `index.html` with the Root Component's Template File

## Demo App

- Added a Movie Component

```jsx
// movie.ts
import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie {
  protected readonly title = signal('demo_app');
}
```

```jsx
// movie.html
<div class="movie">
    <img id="lb-image"
      src="https://images.unsplash.com/
      photo-1583156340160-7867f31285d5" 
      alt="Lego Batman"
    >
    <h3>The Lego Batman</h3>
</div>
```

```jsx
// movie.css
#lb-image {
    width: 250px;
}
h3 {
    text-align: center;
}
.movie {
    margin: 10px;
}
```

- This Movie Component is been imported & added to actual Root Component

```jsx
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './movie-component/movie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Movie],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demo_app');
}

```

- Here, we have imported the Movie Component & added it in `imports`

```jsx
<h1>Movies</h1>
<div class="app">
  <app-movie></app-movie>
  <app-movie></app-movie>
  <app-movie></app-movie>
  <app-movie></app-movie>
  <app-movie></app-movie>
</div>
```

```jsx
.app {
    display: flex;
    overflow-x: auto;
}
```