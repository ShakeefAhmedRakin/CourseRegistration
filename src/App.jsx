import Header from "./Header";
import Selection from "./Selection";
import Courses from "./Courses";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <Header></Header>
      <div className="flex justify-center gap-6">
        <div>
          <Courses></Courses>
        </div>
        <div>
          <Selection></Selection>
        </div>
      </div>
    </div>
  );
}

export default App;
