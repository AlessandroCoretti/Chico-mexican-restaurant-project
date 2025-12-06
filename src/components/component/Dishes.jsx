import menuDetail from "../../assets/WHATS-ON-THE-MENU.png";
import MenuDetail from "../../assets/menu-chicos.png";
/* import margarita from "../../assets/margarita.png";
import papas from "../../assets/papas.png"; */
import Meal from "./Meal";

export default function Dishes() {
  return (
    <>
      <img src={MenuDetail} alt="what's on the menu" className="lg:hidden h-full w-full object-contain mb-10" />
      <img src={menuDetail} alt="what's on the menu" className="hidden lg:block h-full w-full object-contain mb-10" />
      <Meal name={"TACOS AL PASTOR"} description={"Pork marinated in achiote and pineapple, served on corn tortillas with onion and cilantro."} />
      <Meal name={"CARNE ASADA"} description={"Grilled beef marinated in lime and spices, served with guacamole and warm tortillas."} />
      <Meal name={"TINGA DE POLLO"} description={"Pulled chicken cooked in tomato, chipotle, and onion sauce, perfect for tacos or tostadas."} />
      <Meal name={"ENCHILADAS VERDES"} description={"Tortillas stuffed with chicken and covered in salsa verde, sour cream, cheese, and cilantro."} />
      <Meal name={"BURRITO DE BARBACOA"} description={"Large tortilla filled with slow-cooked beef, rice, beans, pico de gallo, and salsa."} />
      <div className="relative lg:w-[50%] gap-x-20 grid grid-cols-2 ">
        <div className="flex flex-col mt-10 col-span-1">
          <p className="text-amber-50 font-bold text-[2rem] lg:text-[3.5rem]">SIDES</p>
          <ul className=" text-amber-50 font-medium text-lg">
            <li>Elotes</li>
            <li>Frijoles Refritos</li>
            <li>Arroz Rojo</li>
            <li>Papas con Chile y Limòn</li>
          </ul>
        </div>
        <div className="flex flex-col mt-10 col-span-1">
          <p className="text-amber-50 font-bold text-[2rem] lg:text-[3.5rem]">SAUCES</p>
          <ul className=" text-amber-50 font-medium text-lg">
            <li>Salsa Verde</li>
            <li>Pico de Gallo</li>
            <li>Salsa Roja Picante</li>
          </ul>
        </div>
        <div className="flex flex-col mt-10 col-span-2">
          <p className="text-amber-50 font-bold text-[2rem] lg:text-[3.5rem]">DRINKS</p>
          <ul className=" text-amber-50 font-medium text-lg">
            <li>Agua de Jamaica</li>
            <li>Horchata</li>
            <li>Margarita Clàsica</li>
            <li>Michelada</li>
            <li>Aguas Frescas Mix</li>
          </ul>
        </div>
        {/* <img src={margarita} alt="margarita-cocktail" className="w-50 absolute -bottom-5 right-20" />
        <img src={papas} alt="margarita-cocktail" className="w-80 absolute top-10 -right-80 " /> */}
      </div>
    </>
  );
}
