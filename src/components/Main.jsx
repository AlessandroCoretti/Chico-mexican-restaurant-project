import Description from "./component/Description";
import Dishes from "./component/Dishes";
import About from "./component/About";

export default function Main() {
  return (
    <>
      <div className="mb-20">
        <Description />
      </div>
      <div className="mb-20">
        <Dishes />
      </div>
      <div className="mb-20">
        <About />
      </div>
    </>
  );
}
