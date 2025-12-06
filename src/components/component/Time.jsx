import { useRef, useState } from "react";

export default function Time({ name = "loading..." }) {
  const hoverTimeout = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setExpanded(true);
    });
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setExpanded(false);
  };

  return (
    <div className="hidden relative lg:inline-block">
      <button
        className="w-55 h-13 text-amber-50 bg-amber-600 text-xl font-extrabold border-2 border-amber-50 
                   px-5 py-2 rounded-lg cursor-pointer transition-all ease-linear duration-150 
                   hover:text-amber-600 hover:bg-amber-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </button>

      <div
        className={`absolute left-0 w-full bg-amber-50 shadow-lg rounded-lg overflow-hidden 
                    transition-all duration-300 ease-out transform origin-top
                    ${expanded ? "max-h-[1000px] opacity-100 scale-y-100 mt-2" : "max-h-0 opacity-0 scale-y-0 mt-0"}`}
      >
        <div className="flex flex-col items-center gap-3 p-4 text-amber-600">
          <h4 className="font-extrabold text-xl underline">WE ARE OPEN</h4>
          <ul className="flex flex-col items-center text-lg font-bold">
            <li>MON/10.00-11.00 pm</li>
            <li>TUE/10.00-11.00 pm</li>
            <li>WEN/10.00-11.00 pm</li>
            <li>THU/10.00-12.00 am</li>
            <li>FRI/10.00-01.00 pm</li>
            <li>SAT/10.00-01.00 pm</li>
            <li>SUN/10.00-11.00 pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
