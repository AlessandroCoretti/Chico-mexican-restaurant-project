import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-amber-50 rounded-full w-14 h-14  flex items-center justify-center group">
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-around w-8 h-6 group">
          <span
            className={`h-1 w-full bg-amber-600 rounded transition-all duration-300 origin-center 
            ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>

          <span
            className={`h-1 w-full bg-amber-600 rounded transition-all duration-300 origin-center 
            ${isOpen ? "-rotate-45 -translate-y-2 " : ""}`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-16 right-0 w-60 bg-amber-50 rounded-xl shadow-xl p-6
          animate-[fadeIn_0.3s_ease]"
        >
          <ul className="flex flex-col  text-amber-600 text-xl font-bold">
            <li className="border-b-2 pb-3 cursor-pointer">Home</li>
            <li className="border-b-2 py-3 cursor-pointer">Contact us</li>
            <li className="pt-3 cursor-pointer">Join us</li>
          </ul>
        </div>
      )}
    </div>
  );
}
