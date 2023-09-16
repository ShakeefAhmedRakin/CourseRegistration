// import { useState } from "react";

const Selection = () => {
  // const [selectedCourses, setSelectedCourses] = useState([]);

  return (
    <div className="p-4 bg-white shadow-xl rounded-xl w-[312px] space-y-4">
      <h1 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining 7
      </h1>
      <hr />
      <h1 className="text-xl font-bold">Course Name</h1>
      <ol className="list-decimal text-gray-500">
        <li className="ml-6">Introduction</li>
        <li className="ml-6">testessts</li>
      </ol>
      <hr />
      <p className="font-medium">Total Credit Hour: 13</p>
      <hr />
      <p className="font-semibold">Total Price: 48000 USD</p>
    </div>
  );
};

export default Selection;
