# Week 7 — Angular Student Course Portal (Digital Nurture 5.0)

A single incrementally-built Angular v20 standalone-API project, matching
your `Angular_HandsOn.pdf` exactly — one app that grows across all 10
hands-ons, not separate projects per exercise (per the doc's submission
guidelines).

## Status: Hands-On 1–3 fully implemented

```
cd student-course-portal
npm install
npm start
```
Open http://localhost:4200

```
npm test
```
Runs the Jasmine/Karma specs already included for Header, Home,
CourseCard, and the credit-label pipe/highlight directive.

## What's built
- Standalone Angular 20 app (`app.config.ts`, no NgModules)
- Header, Home, CourseList, StudentProfile, CourseCard components
- All 4 binding types, lifecycle hooks (`ngOnInit`/`ngOnDestroy`/`ngOnChanges`)
- `@Input`/`@Output` parent-child communication
- `*ngIf`/else, `*ngFor` + `trackBy`, `*ngSwitch`
- `[ngClass]`/`[ngStyle]` via getters, custom `appHighlight` directive, custom `creditLabel` pipe

## What's next
See `student-course-portal/ROADMAP.md` for exact next steps for Hands-On
4–10 (template-driven + reactive forms, services/DI, routing/guards/lazy
loading, HttpClient/interceptors, NgRx, and the remaining unit tests) —
each mapped directly to the corresponding section of your PDF.

Ask me to continue with any specific Hands-On number and I'll write the
full working code for it the same way HOL 1–3 were done.
