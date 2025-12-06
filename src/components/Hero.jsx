import { useState, useEffect } from "react";
import lime from "../assets/lime.svg";
import piatto from "../assets/piatto.svg";
import salsa from "../assets/salsa.svg";
import chicos from "../assets/chicos.png";
import Chicos from "../assets/CHICOS.svg";
import tacos from "../assets/tacos.svg";

export default function Hero() {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <span
        className={`
         z-10 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[65%]
          transition-all duration-300 ease-out delay-100
          ${showImages ? "opacity-100 " : "opacity-0 "}
        `}
      >
        <img src={chicos} alt="" className="h-full w-full object-contain" />
      </span>

      <h3
        className={`
          z-10 absolute top-1/2 left-7 lg:top-2/3 lg:left-2/4  lg:translate-x-1/5 translate-y-8 lg:translate-y-1 font-extrabold text-amber-100 text-2xl lg:text-4xl
          transition-all duration-300 ease-out delay-200
          ${showImages ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        `}
      >
        Sus amigos de siempre
      </h3>

      <div
        className={`
           absolute bottom-[20%] lg:bottom-7 right-5 lg:right-50 w-[100px] overflow-hidden transition-all duration-700 ease-out
          ${showImages ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
        `}
      >
        <img src={lime} alt="" className="h-full w-full object-contain" />
      </div>
      <div
        className={`
          absolute bottom-[30%] lg:bottom-25 right-25 lg:right-70 w-20 overflow-hidden transition-all duration-700 ease-out
          ${showImages ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
        `}
      >
        <img src={lime} alt="" className="h-full w-full object-contain" />
      </div>

      <div
        className={`
          absolute lg:-top-20 -left-20 lg:-left-30 w-[400px] lg:w-[620px] overflow-hidden transition-all duration-700 ease-out
          ${showImages ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
        `}
      >
        <img src={piatto} alt="" className="h-full w-full object-contain" />
      </div>

      <div
        className={`
          absolute bottom-25 lg:bottom-10 lg:left-50 w-[100px] lg:w-[150px] overflow-hidden transition-all duration-700 ease-out
          ${showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
      >
        <img src={salsa} alt="" className="h-full w-full object-contain " />
      </div>
      <div
        className={`
          absolute top-[35%] lg:-top-20 -right-20 lg:right-30 w-40 lg:w-[260px] rotate-125 overflow-hidden transition-all duration-700 ease-out
          ${showImages ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
        `}
      >
        <img src={tacos} alt="" className="h-full w-full object-contain " />
      </div>
    </>
  );
}
