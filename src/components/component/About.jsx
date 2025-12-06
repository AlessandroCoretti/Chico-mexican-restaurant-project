import about from "../../assets/DISCOVER-CHICOS.png";
import info from "../../assets/faq-chics.png";
import chicos from "../../assets/chicos.png";
import shop from "../../assets/shop.png";

export default function About() {
  return (
    <>
      <img src={info} alt="discover-chicos" className="lg:hidden h-full w-full object-contain mb-10" />
      <img src={about} alt="discover-chicos" className="hidden lg:block h-full w-full object-contain mb-10" />
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-col">
          <h3 className="text-3xl text-amber-50 font-bold ">Authentic Mexican spirit.</h3>
          <h3 className="text-3xl text-amber-50 font-bold ">No shortcuts.</h3>
          <h3 className="text-3xl text-amber-50 font-bold mb-4">No watered-down flavours.</h3>
          <p className="text-lg text-amber-50 font-medium leading-relaxed">
            We’re not here to play it cool or blend in. We’re here to show what happens when true dedication meets the roots of a culture
          </p>
          <p className="text-lg text-amber-50 font-medium leading-relaxed">
            — where every ingredient has purpose and “good enough” simply isn’t part of who we are.
          </p>
          <div className="flex items-center lg:gap-2 mt-4">
            <p className="text-lg text-amber-50 font-bold leading-relaxed lg:mb-0">
              This is Mexican cuisine at its boldest. This is <strong className="lg:hidden text-green-800 text-2xl">CHICOS </strong>
            </p>
            <img src={chicos} alt="Chicos signature" className="hidden lg:block h-6 object-contain" />
          </div>
        </div>
        <div className="h-full lg:w-[50%]">
          <img src={shop} alt="" className="h-full w-full object-contain rounded-lg" />
        </div>
      </div>
    </>
  );
}
