import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  return (
    <div>
      <h1>Blogger App</h1>
      <BookDetails hasBooks={true} />
      <BlogDetails hasBlogs={true} />
      <CourseDetails hasCourses={true} />
    </div>
  );
}

export default App;
