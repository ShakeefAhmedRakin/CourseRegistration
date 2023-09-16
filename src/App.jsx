import Header from "./Header";
import Selection from "./Selection";
import Courses from "./Courses";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const creditLimit = 20;
  const [creditSelected, setCreditSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const cardClickHandler = (course) => {
    if (!selectedCourses.includes(course)) {
      if (creditSelected + course.credit <= creditLimit) {
        setSelectedCourses([...selectedCourses, course]);
        setTotalPrice(totalPrice + course.price);
        setCreditSelected(creditSelected + course.credit);
      } else {
        toast.warn("Credit limit exceeded!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Course Already Selected", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="bg-[#F3F3F3] pb-16">
      <Header></Header>
      <div className="flex flex-col lg:flex-row justify-center gap-6 px-3">
        <div>
          <Courses cardClickHandler={cardClickHandler}></Courses>
        </div>
        <div className="flex-1 lg:max-w-[400px]">
          <Selection
            selectedCourses={selectedCourses}
            creditSelected={creditSelected}
            totalPrice={totalPrice}
          ></Selection>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
