import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  // const [courses,setCourses] = useState [];

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <h1 className="text-center text-5xl text-red-500 ">HELLO</h1>
    </>
  );
}

export default App;
