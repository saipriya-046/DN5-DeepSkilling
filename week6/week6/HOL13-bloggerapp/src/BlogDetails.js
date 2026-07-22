import React from "react";

// Style 2: ternary operator inline in JSX
function BlogDetails({ hasBlogs }) {
  return (
    <div>
      {hasBlogs ? (
        <p>Blog Details: "10 Tips for React Beginners"</p>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}

export default BlogDetails;
