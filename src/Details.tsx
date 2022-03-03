import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Route, useParams, Routes } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { GlobalContext, FavoriteMoviesStates } from "./context/GlobalState";
import { FavoriteMoviesType } from "./context/FavoriteMoviesType";
import { Favorites } from "./Favorites";
const API_KEY = "65ec2c07fb70b3028ab6e232fd7fdec9";
const baseUrl = "https://api.themoviedb.org/3";
const imageUrl: string = "//image.tmdb.org/t/p/original//";
function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [hiddenFavorite, setHiddenFavorite] = useState<String>("");
  const [hiddenRemoveFavorite, setHiddenRemoveFavorite] =
    useState<String>("hidden");
  const { addMovies } = useContext(GlobalContext) as FavoriteMoviesStates;
  const { favorite } = useContext(GlobalContext) as FavoriteMoviesStates;
  const { removeMovies } = useContext(GlobalContext) as FavoriteMoviesStates;

  const checkFavorite = () => {
    let isFavorite = favorite.find((item) => {
      if (item.id == movieDetails?.id) {
        return item;
      } else {
        return null;
      }
    });
    console.log(isFavorite);
    if (isFavorite != null) {
      setHiddenFavorite("hidden");
      setHiddenRemoveFavorite("");
    } else {
      setHiddenFavorite("");
      setHiddenRemoveFavorite("hidden");
    }

    if (favorite.length == 0 && hiddenRemoveFavorite == "") {
      console.log("statement also got here");
      setHiddenFavorite("");
      setHiddenRemoveFavorite("hidden");
    }
  };
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
  }, [id]);

  // useEffect(() => {
  //   console.log(favorite);
  //   checkFavorite();
  // }, [favorite]);
  useEffect(() => {
    checkFavorite();
  });

  let FavoriteMovies: FavoriteMoviesType = {
    id: movieDetails?.id,
    backdrop_path: movieDetails?.backdrop_path,
    title: movieDetails?.title,
    overview: movieDetails?.overview,
  };
  const handleSubmitFavorite = (isFavorite: boolean) => {
    if (isFavorite == true) {
      addMovies(FavoriteMovies);
      alert("Movie has been added to Favorites");
    } else {
      console.log("Movie has already been added");
    }
  };
  const handleRemoveFavorite = (
    isRemoveFavorite: boolean,
    id: number,
    title: string
  ) => {
    if (isRemoveFavorite == true) {
      removeMovies(id);
      alert(`Movie ${title} has been removed from favorites`);
    } else {
      console.log("Movie has already been added");
    }
  };

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
          <button
            className={`${hiddenFavorite} bg-green-900 rounded-lg`}
            onClick={() => {
              if (hiddenFavorite == "") {
                handleSubmitFavorite(true);
              } else {
                handleSubmitFavorite(false);
              }
            }}
          >
            <span className="mr-7 ml-7">Favorite</span>
          </button>
          <button
            className={`${hiddenRemoveFavorite} bg-red-600 rounded-lg`}
            onClick={() => {
              if (hiddenRemoveFavorite == "") {
                handleRemoveFavorite(
                  true,
                  movieDetails!.id,
                  movieDetails!.title
                );
              } else {
              }
            }}
          >
            <span className="mr-7 ml-7">Remove From Favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
