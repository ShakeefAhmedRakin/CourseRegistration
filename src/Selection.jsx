const Selection = ({ selectedCourses, creditSelected, totalPrice }) => {
  return (
    <div className="p-4 bg-white shadow-xl rounded-xl space-y-4">
      <h1 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining {20 - creditSelected}
      </h1>
      <hr />
      <h1 className="text-xl font-bold">Course Name</h1>
      <ol className="list-decimal text-gray-500">
        {selectedCourses.map((course) => (
          <li className="ml-6" key={course.courseId}>
            {course.courseName}
          </li>
        ))}
      </ol>
      <hr />
      <p className="font-medium">Total Credit Hour: {creditSelected}</p>
      <hr />
      <p className="font-semibold">Total Price: {totalPrice} USD</p>
    </div>
  );
};

export default Selection;
