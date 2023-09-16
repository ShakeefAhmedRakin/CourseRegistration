import Header from "./Header";
import Selection from "./Selection";
import Courses from "./Courses";

function App() {
  const cardClickHandler = (course) => {
    console.log(course.courseName);
  };
  return (
    <div className="bg-[#F3F3F3] pb-16">
      <Header></Header>
      <div className="flex justify-center gap-6">
        <div>
          <Courses cardClickHandler={cardClickHandler}></Courses>
        </div>
        <div>
          <Selection></Selection>
        </div>
      </div>
    </div>
  );
}

export default App;
