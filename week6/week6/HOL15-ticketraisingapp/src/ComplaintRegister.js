import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const generateReferenceNumber = () => {
    return "REF-" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const refNumber = generateReferenceNumber();
    alert(
      `Complaint registered for ${employeeName}.\nYour reference number is: ${refNumber}`
    );
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Complaint Register</h2>
      <div>
        <label>Employee Name: </label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Complaint: </label>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintRegister;
