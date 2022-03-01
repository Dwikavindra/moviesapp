import { useState, useEffect } from "react";
import axios from "axios";
import { Route, useParams, Routes } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
const API_KEY = "65ec2c07fb70b3028ab6e232fd7fdec9";
const baseUrl = "https://api.themoviedb.org/3";
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
      <div>Hello World{movieDetails?.backdrop_path}</div>
    </div>
  );
}

export default Details;
