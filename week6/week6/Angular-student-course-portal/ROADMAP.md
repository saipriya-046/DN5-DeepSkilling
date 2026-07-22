# Student Course Portal — Build Roadmap

This project is built incrementally, exactly like your Digital Nurture 5.0
Angular Exercise Book (10 hands-ons, one growing app). What's implemented
so far, and exactly what to add next.

## ✅ Implemented (Hands-On 1–3)

- **HOL 1** — Project scaffold (standalone API, `app.config.ts` instead of
  `app.module.ts` — this is Angular 17+/20 default), routing, `ng serve`/`ng build` config.
- **HOL 2** — All four binding types in `HomeComponent` (interpolation,
  property binding, event binding, two-way `ngModel`), lifecycle hooks
  (`ngOnInit`/`ngOnDestroy` in Home, `ngOnChanges` in CourseCard),
  `@Input`/`@Output` parent-child communication (CourseList → CourseCard → enroll event).
- **HOL 3** — Structural directives (`*ngIf`/else via loading flag, `*ngFor`
  with `trackBy`, `*ngSwitch` for grade badges), attribute directives
  (`[ngClass]`/`[ngStyle]` via getters), a custom `appHighlight` directive
  (`@HostListener` mouseenter/leave, configurable color), and a custom
  `creditLabel` pipe.

Run it:
```
npm install
npm start
```
Open http://localhost:4200

Run tests:
```
npm test
```

## 🔜 Next: Hands-On 4 — Template-Driven Forms

1. `ng generate component pages/enrollment-form`, add route `/enroll`.
2. Add `FormsModule` to the component's `imports` array.
3. Build the form exactly as in the PDF: `#enrollForm="ngForm"`,
   `(ngSubmit)="onSubmit(enrollForm)"`, fields `studentName`, `studentEmail`,
   `courseId`, `preferredSemester`, `agreeToTerms`, each with `[(ngModel)]`
   and a `name` attribute.
4. Add validators (`required`, `minlength`, `email`) and show errors using
   `#nameCtrl="ngModel"` + `*ngIf="nameCtrl.touched && nameCtrl.errors?.required"`.
5. Style `.ng-invalid.ng-touched` / `.ng-valid.ng-touched` in CSS.

## Hands-On 5 — Reactive Forms

1. `ng generate component pages/reactive-enrollment-form`, route `/enroll-reactive`.
2. Add `ReactiveFormsModule` to imports, inject `FormBuilder`.
3. Build the group exactly as specified (studentName, studentEmail, courseId,
   preferredSemester, agreeToTerms) with the same validators.
4. Add the custom sync validator `noCourseCode` (rejects values starting `XX`)
   and the async validator `simulateEmailCheck` (rejects any email containing `test@`).
5. Add a `FormArray` for `additionalCourses` with add/remove buttons.

## Hands-On 6 — Services & DI

1. `ng generate service services/course`, `providedIn: 'root'`. Move the
   `courses` array out of `CourseListComponent` and into this service
   (`getCourses()`, `getCourseById()`, `addCourse()`). Inject it into
   `CourseListComponent` and `HomeComponent`.
2. `ng generate service services/enrollment`. Inject `CourseService` into it
   (service-to-service injection). Methods: `enroll`, `unenroll`,
   `isEnrolled`, `getEnrolledCourses()`.
3. Inject `EnrollmentService` into `CourseCardComponent` (toggle Enroll/Unenroll
   — the button already reads `isEnrolled` as an `@Input`, wire it to the
   service instead) and into `StudentProfileComponent` (list enrolled courses).
4. Generate `NotificationComponent` with a component-level provider
   (`providers: [NotificationService]`) to demonstrate scoped DI vs `providedIn: 'root'`.

## Hands-On 7 — Routing, Guards, Lazy Loading

1. Add `CourseDetailComponent` at `courses/:id` (`ActivatedRoute` + `paramMap`).
2. Add query params to the courses route for search.
3. Nest routes under a `CoursesLayoutComponent` with its own `<router-outlet>`.
4. Move the enrollment form components into a lazy-loaded
   `features/enrollment` module (`loadChildren`).
5. `ng generate guard guards/auth` (`canActivate`, hardcoded `isLoggedIn`)
   on `/profile` and `/enroll`. `ng generate guard guards/unsaved-changes`
   (`canDeactivate`, checks `form.dirty`, `window.confirm`).

## Hands-On 8 — HttpClient, RxJS, Interceptors

1. `npm install -g json-server`, create `db.json` with `courses` array,
   run `json-server --watch db.json --port 3000`.
2. `provideHttpClient()` in `app.config.ts`. Refactor `CourseService` to call
   `http.get<Course[]>('http://localhost:3000/courses')` etc. (GET/POST/PUT/DELETE).
3. Add `map`, `catchError`, `tap`, `retry(2)` to the course-loading pipeline.
   Use `switchMap` to chain course selection → enrolled students lookup.
4. `ng generate interceptor interceptors/auth` (adds `Authorization` header),
   `interceptors/error-handler` (401 → redirect, 500 → notification),
   `interceptors/loading` (drives a `LoadingService` BehaviorSubject +
   global spinner via `finalize`).

## Hands-On 9 — NgRx

```
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools
```
1. `provideStore()` + `provideStoreDevtools({ maxAge: 25 })` in `app.config.ts`.
2. `store/course/course.actions.ts` (`loadCourses`, `loadCoursesSuccess`,
   `loadCoursesFailure`), `course.reducer.ts` (`{ courses, loading, error }`),
   `course.selectors.ts` (`selectAllCourses`, etc.).
3. `course.effects.ts` — `loadCourses$` effect using `switchMap` +
   `CourseService` + `catchError(() => of(loadCoursesFailure(...)))`.
4. `store/enrollment/` — mirror the pattern for enrollment state, with a
   cross-slice selector combining course + enrollment state.
5. `CourseListComponent` switches from service subscription to
   `store.select(selectAllCourses)` + `async` pipe.

## Hands-On 10 — Unit Testing

`course-card.component.spec.ts` and `home.component.spec.ts` already have
starter tests (creation, @Input rendering, @Output emit). Extend with:
1. `ngOnChanges` spy test (spy on `console.log`).
2. `course.service.spec.ts` using `HttpClientTestingModule` +
   `HttpTestingController` (`expectOne(...).flush(...)`, `httpMock.verify()`).
3. A component test using `provideMockStore({ initialState: ... })` once
   NgRx (HOL 9) is in place — assert rendered cards match state, and that
   toggling `loading: true` shows the loading indicator.

Run `ng test --code-coverage` once these are added to see the coverage report.

---
Ask me to continue with any specific hands-on (4 through 10) and I'll write
out the full working code the same way HOL 1–3 were built.
