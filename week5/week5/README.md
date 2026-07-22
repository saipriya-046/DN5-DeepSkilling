# Week 5 — React JS Hands-On Labs (HOL 1–10)

Each folder is an independent, runnable Create React App project built from
your ReactJS-HOL Word documents. To run any of them:

```
cd HOLx-appname
npm install
npm start
```

Then open http://localhost:3000

| # | Folder | Topic | Concepts |
|---|--------|-------|----------|
| 1 | HOL1-myfirstreact | React setup | create-react-app basics |
| 2 | HOL2-StudentApp | Class components | Home/About/Contact components |
| 3 | HOL3-scorecalculatorapp | Function components + CSS | props, external stylesheet |
| 4 | HOL4-blogapp | Component lifecycle | componentDidMount, componentDidCatch, fetch API |
| 5 | HOL5-CohortDashboard | CSS Modules | scoped styling, conditional colors |
| 6 | HOL6-TrainersApp | React Router | BrowserRouter, Routes, Link, useParams |
| 7 | HOL7-shoppingapp | Props | parent→child data passing, list rendering |
| 8 | HOL8-counterapp | State | constructor state, setState with updater fn |
| 9 | HOL9-cricketapp | ES6 features | map, filter, destructuring, spread/merge |
| 10 | HOL10-officespacerentalapp | JSX | JSX elements/attributes, inline conditional styling |

## Notes on reconstruction
- HOL5's original doc referenced a pre-built starter project attached as an
  embedded .emf file, which isn't extractable from the Word doc — I rebuilt
  it to spec from the written requirements instead of the missing screenshots.
- HOL10 references a local office image not present in the doc — drop any
  .jpg into `HOL10-officespacerentalapp/src/office.jpg` before running.
- All other HOLs (1–4, 6–9) are built directly from the code screenshots in
  your Word docs.

## Next
Send over React HOL 11–13 and your Angular/GIT docs whenever ready, and I'll
add `week5/HOL11...` etc. and a separate `week6` folder for Git + remaining
React labs, matching your course tracker.
