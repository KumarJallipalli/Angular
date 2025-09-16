# 01. Demo [ 12/09/2025 ]

---

## Standalone ( vs ) Distributed Applications

- Standalone App:
    - An application that runs **independently** on a Single Machine→ Runs on Single Machine [ PC ]
    - No Network Connection is required [ for core functionality ] → **No network** dependency
    - Once Installed, can be used by Single User only → Single User Application
    - All code, data, and resources are **local → Standalone App**
    - Performance Limited to local resources/Machine → Performance
    - Ex: Desktop Apps, Mobile Apps etc..
- Distributed App:
    - An Application that runs on **multiple Machines Simultaneously →** Runs on Multiple Machines [ called Servers ]
    - Network Connection is required **for communication between the Machines → Network** dependency
    - Once Installed, can be used by Multiple Users → Multiple User Application
    - All code, data, and resources are distributed **→ Distributed App**
    - Performance can be scaled with multiple nodes/Servers → Performance
    - Ex: Web Applications likes Gmail, Online Banking

<aside>
💡

NOTE:

---

- Installation of an Application on a Server is called Hosting
- **`Hosting`** → Allocating **Storage and Computing resources on a server** so that a website, application, or service can be accessed over the **internet**
- `Web Server` → A Server which hosts Websites
    - Web Server will also Process & Deliver the Web pages to Clients/Users
    - Hence, `Web Server` → Server that hosts/Stores, Processes & Delivers/Serves the Web Pages to End-Users
- `DB Servers` → Servers which hosts, Processes & Serves the Data
</aside>

## Pillars of Web Application

- There are 3 pillars of Web Application
    1. Performance
    2. Security
    3. UI
- WKT, Servers do the Performance things
    - So, if we add the Security & UI as well on Server Side
    - Then, Servers requires more processing & sometimes performance will drop
- So, if we add the Security & UI as well on Client Side
    - Then, Security will be broken [ as Browsers are public & accessed by Browser people as well ]
- Hence, we will divide these Pillars
    - Performance & Security will be done on Server Side → Backend
    - UI [ & Some Performance ] will be done on Client Side → Frontend
    - Together it forms a Full Stack [ → Stack of technologies required for both Frontend + Backend ]

## Full Stack Tech

- Frontend → HTML, CSS, JS
- Backend → Java, .NET, Python etc..
- DB → MySQL, Oracle etc..

But Where Angular Stands in these Tech Stack..?

- JS is the one which drives the Browsers [ Client side ]
- But JS itself is very complex to build the apps
    - Hence, jQuery was came into picture
    - But jQuery is a Library & Fails to provide
        - SPA, Routing, Validations etc..
        - Hence separate 3rd party libraries are required
    - And also requires lot of DOM manipulations, Event Handling, Coding etc..
- This is where Angular comes into picture [ built on jQuery cons ]

## Angular

- Angular is a Framework [ Not a Library ]
    - AngularJS is a Library [ Similar to ReactJS ]
- Angular uses TypeScript [ JS + Data Types ]
    - AngularJS uses JS [ Similar to ReactJS ]