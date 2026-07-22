import React from "react";

// Style 1: if/else statement inside a function component
function BookDetails({ hasBooks }) {
  if (hasBooks) {
    return <p>Book Details: "Clean Code" by Robert C. Martin</p>;
  }
  return <p>No books available.</p>;
}

export default BookDetails;
