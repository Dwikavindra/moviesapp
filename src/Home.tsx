import React, { useState } from "react";
import Movies from "./Movies";
import MovieCards from "./MovieCards";

function Home() {
  let individualMovies: Movies = {
    id: 0,
    title: "Spider Man",
    img: "https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg",
  };
  const [movies, setMovies] = useState<Movies[]>(generateMovies());
  function generateMovies(): Movies[] {
    let randomMovies = [];

    for (let i = 0; i < 50; i++) {
      const randomMovie = {
        id: Math.floor(Math.random() * 100),
        title: "Spider Man",
        img: "https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg",
      };
      randomMovies.push(randomMovie);
    }
    return randomMovies;
  }
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {movies.map((value, index) => {
        return (
          <MovieCards
            key={index}
            id={value.id}
            img={value.img}
            title={value.title}
            description="Nisi commodo duis aliquip veniam pariatur exercitation ex in commodo aute. Laborum eu nostrud dolore consequat culpa nisi minim velit ipsum est ea voluptate esse ad. Cillum cillum aute amet mollit. Aliqua do exercitation culpa quis consequat pariatur est. Ullamco consectetur incididunt nostrud amet reprehenderit dolor voluptate ullamco qui nostrud consequat velit consequat. Do minim sint consequat sit velit consequat aliqua exercitation laborum ipsum do veniam veniam consequat."
          ></MovieCards>
        );
      })}
    </div>
  );
}

export default Home;
