# HOL 14 - Employee Management App (React Context API)

## Objectives
Replace props-drilling of a theme value (App -> EmployeeList -> EmployeeCard)
with the React Context API.

## Task
- ThemeContext.js: createContext("light"), exported as default
- App.js: wraps the tree in ThemeContext.Provider, value comes from state
- EmployeeList.js: no longer receives or forwards a theme prop
- EmployeeCard.js: reads theme directly via useContext(ThemeContext)

## How to run
npm install
npm start
