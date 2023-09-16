import { useState } from "react";
import { useEffect } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.courseId} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Courses;
