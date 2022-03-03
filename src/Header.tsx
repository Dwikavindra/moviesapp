import { HomeIcon, HeartIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 sm:justify-between items-center">
      <div className="flex flex-grow max-w-2xl ">
        <Link to="/">
          <HeaderItem title="Home" Icon={HomeIcon}></HeaderItem>
        </Link>
        <Link to="/favorites">
          <HeaderItem title="Favorite" Icon={HeartIcon}></HeaderItem>
        </Link>
      </div>
      <img
        className="huluimgsize item-center "
        src="https://links.papareact.com/ua6"
      ></img>
    </header>
  );
}

export default Header;
