import Header from "./Header";
import Selection from "./Selection";
import Courses from "./Courses";
import { useState } from "react";

function App() {
  const creditLimit = 20;
  const [creditSelected, setCreditSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const cardClickHandler = (course) => {
    if (creditSelected + course.credit <= creditLimit) {
      setSelectedCourses([...selectedCourses, course]);
      setTotalPrice(totalPrice + course.price);
      setCreditSelected(creditSelected + course.credit);
    } else {
      alert("Credit limit exceeded!");
    }
  };

  return (
    <div className="bg-[#F3F3F3] pb-16">
      <Header></Header>
      <div className="flex justify-center gap-6">
        <div>
          <Courses cardClickHandler={cardClickHandler}></Courses>
        </div>
        <div>
          <Selection
            selectedCourses={selectedCourses}
            creditSelected={creditSelected}
            totalPrice={totalPrice}
          ></Selection>
        </div>
      </div>
    </div>
  );
}

export default App;
