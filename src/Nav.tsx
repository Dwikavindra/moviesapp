import { Link } from "react-router-dom";
import requests from "./requests";

interface NavProps {
  setSelectedCategory: Function;
  navBarStatus: string;
}
function Nav(props: NavProps) {
  return (
    <nav className={`${props.navBarStatus} relative`}>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        <Link to="/">
          <h2
            onClick={() => {
              console.log("clicked");
              props.setSelectedCategory(requests.fetchActionMovies);
            }}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            Action
          </h2>
        </Link>
        <Link to="/">
          <h2
            onClick={() => {
              props.setSelectedCategory(requests.fetchAdventure);
            }}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
          >
            Adventure
          </h2>
        </Link>
        <h2
          onClick={() => {
            props.setSelectedCategory(requests.fetchAnimation);
          }}
          className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
        >
          Animation
        </h2>
        <h2
          onClick={() => {
            props.setSelectedCategory(requests.fetchComedyMovies);
          }}
          className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
        >
          Comedy
        </h2>
        <h2
          onClick={() => {
            props.setSelectedCategory(requests.fetchCrime);
          }}
          className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
        >
          Crime
        </h2>
        <h2
          onClick={() => {
            props.setSelectedCategory(requests.fetchDocumentary);
          }}
          className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
        >
          Documentary
        </h2>
      </div>
    </nav>
  );
}

export default Nav;
