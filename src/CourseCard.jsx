const CourseCard = ({ course, cardClickHandler }) => {
  const { courseName, credit, details, image, price } = course;

  return (
    <div className="p-4 bg-white shadow-xl rounded-xl w-[300px] space-y-4">
      <img src={image} alt="" />
      <div className="space-y-1">
        <h2 className=" text-lg font-semibold">{courseName}</h2>
        <p className=" text-sm text-gray-500 ">{details}</p>
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-gray-500">Price: {price}</h2>
        <h2 className="font-semibold text-gray-500">Credit: {credit}hr</h2>
      </div>
      <button
        onClick={() => cardClickHandler(course)}
        className="hover:bg-[#2a71cf] btn w-full bg-[#2F80ED] text-white text-base font-semibold"
      >
        Select
      </button>
    </div>
  );
};

export default CourseCard;
