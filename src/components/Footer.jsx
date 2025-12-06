import Fb from "./icons/Fb";
import Ig from "./icons/Ig";
import TripAdv from "./icons/TripAdv";

export default function Footer() {
  return (
    <div className="flex items-center justify-between h-full ">
      <section className="flex-col ">
        <p className="text-white font-medium text-lg">Here you can enter your social links or the location of your business.</p>
        <p className="text-white font-medium text-lg">Address: XXX XXX XXX , 23</p>
      </section>

      <div className="flex items-center gap-2">
        <Ig size={40} />
        <Fb size={40} />
        <TripAdv size={40} />
      </div>
    </div>
  );
}
