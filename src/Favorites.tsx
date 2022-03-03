import { useEffect, useContext } from "react";
import { GlobalContext, FavoriteMoviesStates } from "./context/GlobalState";
import { FavoriteMoviesType } from "./context/FavoriteMoviesType";
import MovieCards from "./MovieCards";
interface FavoritesProps {
  NavBarStatus: Function;
}
export function Favorites(props: FavoritesProps) {
  const { favorite } = useContext(GlobalContext) as FavoriteMoviesStates;
  useEffect(() => {
    props.NavBarStatus("hidden");
    return () => {
      props.NavBarStatus("");
    };
  });
  return (
    <div>
      <div className="text-center sm:ml-10 sm:text-left">
        <h2 className="text-white text-3xl font-bold">Your Favorite Movies</h2>
      </div>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 h-[100%] ">
        {favorite.map((value, index) => {
          return (
            <MovieCards
              key={index}
              id={value.id}
              img={value.backdrop_path}
              title={value.title}
              description={value.overview}
            ></MovieCards>
          );
        })}
      </div>
    </div>
  );
}
