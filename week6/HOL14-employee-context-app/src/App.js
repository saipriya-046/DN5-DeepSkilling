import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import EmployeeList from "./EmployeeList";

const employees = [
  { id: 1, name: "Syed Khaleelullah", role: ".NET Developer" },
  { id: 2, name: "Jojo Jose", role: "Java Developer" },
  { id: 3, name: "Elisa Jones", role: "Python Developer" }
];

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app app--${theme}`}>
        <h1>Employee Management</h1>
        <button onClick={toggleTheme}>Toggle Theme (current: {theme})</button>
        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
