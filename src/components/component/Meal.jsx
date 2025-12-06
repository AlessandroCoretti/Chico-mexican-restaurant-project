import { useState } from "react";

export default function Meal({ name, description }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* DIV che gestisce l'hover */}
      <div
        className="bg-transparent h-30 flex flex-col  justify-center relative overflow-hidden rounded-b-lg transition-all duration-300 hover:bg-amber-500"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Prima frase */}
        <p
          className={`
            text-amber-50 font-bold text-[2rem] lg:text-[3.5rem] absolute transition-all duration-300
            ${hover ? "-translate-y-4 opacity-100 px-4" : "translate-y-0 opacity-100"}
          `}
        >
          {name}
        </p>

        {/* Seconda frase */}
        <p
          className={`
            text-amber-50 font-medium text-sm lg:text-lg absolute transition-all duration-300
            ${hover ? "translate-y-10 opacity-100 px-4" : "translate-y-16 opacity-0"}
          `}
        >
          {description}
        </p>
      </div>
    </>
  );
}
