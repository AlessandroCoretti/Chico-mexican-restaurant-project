import chicos from "../assets/chicos.png";
import Time from "./component/Time";
import Locations from "./component/Locations";
import Menu from "./component/Menu";
import OrderNow from "./component/OrderNow";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="w-30 lg:w-50">
        <img src={chicos} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="flex items-center justify-between gap-10">
        <Time name="OPENING TIMES" />
        <Locations name="FIND US" />
        <OrderNow name="ORDER NOW" />
        <Menu />
      </div>
    </nav>
  );
}
