import { useEffect } from "react";

interface FavoritesProps {
  NavBarStatus: Function;
}
export function Favorites(props: FavoritesProps) {
  useEffect(() => {
    props.NavBarStatus("hidden");
    return () => {
      props.NavBarStatus("");
    };
  });
  return (
    <div>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 h-[100%] ">
        {/* {movies?.results?.map((value, index) => {
        console.log("Hello World");
        console.log(movies.results);
        return (
          <MovieCards
            key={index}
            id={value.id}
            img={value.backdrop_path}
            title={value.title}
            description={value.overview}
          ></MovieCards>
        );
      })} */}
      </div>
    </div>
  );
}
