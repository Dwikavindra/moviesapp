import { useState, useEffect } from "react";
import axios from "axios";
import { Route, useParams, Routes } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
const API_KEY = "65ec2c07fb70b3028ab6e232fd7fdec9";
const baseUrl = "https://api.themoviedb.org/3";
const imageUrl: string = "//image.tmdb.org/t/p/original//";
function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=65ec2c07fb70b3028ab6e232fd7fdec9&language=en-US`
      );
      setMovieDetails(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
    console.log(movieDetails);
  }, [id]);
  return (
    <div>
      <div className="relative">
        <img
          className="responsiveimgdetails"
          src={`${imageUrl}${movieDetails?.backdrop_path}`}
        ></img>

        <div className="overlay_details">
          <div className="flex flex-col w-96 mt-36  font-mono ">
            <span className="text-white text-3xl"> {movieDetails?.title}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mt-10">
          <img
            src={`${imageUrl}${movieDetails?.poster_path}`}
            alt="movieimage"
            className="poster_details"
          ></img>
          <p className="text-white">{movieDetails?.overview}</p>
        </div>
        <div className=" flex flex-row mt-8 justify-evenly">
          <div>{movieDetails?.popularity}</div>
          <button className={` bg-green-900 rounded-lg`}>
            <span className="mr-7 ml-7">Favorite</span>
          </button>
          <button className={`hidden bg-red-600 rounded-lg`}>
            <span className="mr-7 ml-7">Remove From Favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
