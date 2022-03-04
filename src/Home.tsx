import React, { useEffect, useState, useRef } from "react";
import Movies from "./Movies";
import MovieCards from "./MovieCards";
import { Result } from "./MovieResults";
import axios from "axios";

interface HomeProps {
  selectedCategory: string;
}

function Home(props: HomeProps) {
  const [movies, setMovies] = useState<Result[]>([] as Result[]);
  const [page, setPage] = useState<number>(2);
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchInfiniteData() {
    setPage(page + 1);
    console.log(page);
    const request = await axios.get(`${props.selectedCategory}&page=${page}`);
    console.log(request.data);
    const initialMoviesResults = [...movies];
    const data = request.data.results;
    data.forEach((element: Result) => {
      initialMoviesResults.push(element);
    });
    setMovies(initialMoviesResults);
    console.log(movies);
  }
  async function handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("bottom reached");
      await delay(3000);
      fetchInfiniteData();
    }
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.selectedCategory);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.selectedCategory]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 h-[100%] ">
      {movies?.map((value, index) => {
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
