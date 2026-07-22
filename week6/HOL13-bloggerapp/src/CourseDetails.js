import React from "react";

// Style 3: short-circuit (&&) rendering, and element variables
function CourseDetails({ hasCourses }) {
  let courseElement = null;
  if (hasCourses) {
    courseElement = <p>Course Details: "Full Stack Development with .NET"</p>;
  }

  return (
    <div>
      {hasCourses && <p>(Short-circuit) Course found!</p>}
      {courseElement}
    </div>
  );
}

export default CourseDetails;
