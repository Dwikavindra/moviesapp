import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className=" relative ">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
          Action
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">
          Adventure
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">
          Animation
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">
          Comedy
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">
          Crime
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">
          Documentary
        </h2>
      </div>
    </nav>
  );
}

export default Nav;
