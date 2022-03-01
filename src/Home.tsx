import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import MovieCards from "./MovieCards";
import { MoviesResults, Result } from "./MovieResults";
import axios from "axios";

interface HomeProps {
  selectedCategory: string;
}

function Home(props: HomeProps) {
  let individualMovies: Movies = {
    id: 0,
    title: "Spider Man",
    img: "https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg",
  };
  const [movies, setMovies] = useState<MoviesResults>();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.selectedCategory);
      setMovies(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
    console.log(movies);
  }, [movies]);
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 h-[100%] ">
      {movies?.results?.map((value, index) => {
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
      })}
    </div>
  );
}

export default Home;
