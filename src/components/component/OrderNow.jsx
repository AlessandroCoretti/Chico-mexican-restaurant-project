export default function OrderNow({ name = "loading..." }) {
  return (
    <button className="hidden lg:block w-55 h-13 text-amber-600 bg-amber-50 text-xl font-extrabold font-xl border-2 px-5 py-2 rounded-lg cursor-pointer transition-all ease-linear duration-75 hover:text-amber-50 hover:bg-amber-600 hover: border-amber-50">
      {name}
    </button>
  );
}
