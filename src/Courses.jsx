import { useState } from "react";
import { useEffect } from "react";
import CourseCard from "./CourseCard";

const Courses = ({ cardClickHandler }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.courseId}
            course={course}
            cardClickHandler={cardClickHandler}
          ></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
