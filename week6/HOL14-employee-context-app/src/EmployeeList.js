import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  // Theme is no longer received or passed as a prop -- EmployeeCard
  // pulls it directly from ThemeContext via useContext().
  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;
