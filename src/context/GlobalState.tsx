import { create } from "domain";
import React, { createContext, useEffect, useState } from "react";
import { CodeActionCommand, isPropertySignature } from "typescript";
import { FavoriteMoviesType } from "./FavoriteMoviesType";

type FavoriteAction = {
  type: string;
  payload: FavoriteMoviesType;
};

export type FavoriteMoviesStates = {
  favorite: FavoriteMoviesType[];
  addMovies: (movies: FavoriteMoviesType) => void;
  removeMovies: (id: number) => void;
};
const initialState: FavoriteMoviesStates = {
  favorite: [],
  addMovies: () => {},
  removeMovies: () => {},
};

export const GlobalContext = createContext<FavoriteMoviesStates>(initialState);

export const GlobalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [movies, setMovies] = useState<FavoriteMoviesType[]>([]);

  const AddMovieToFavorites = (movie: FavoriteMoviesType) => {
    setMovies([...movies, movie]);
  };

  const removeMovies = (id: number) => {
    const newmovies: FavoriteMoviesType[] = movies.filter(
      (val) => val.id != id
    );

    setMovies(newmovies);
    sessionStorage.setItem("favorites", JSON.stringify(newmovies));
  };
  function getFavoritesFromSessionStorage() {
    let favoriteslist = sessionStorage.getItem("favorites");
    if (favoriteslist == null) {
      return movies;
    } else {
      setMovies(JSON.parse(favoriteslist));
    }
  }

  useEffect(() => {
    if (movies.length > 0) {
      sessionStorage.setItem("favorites", JSON.stringify(movies));
    }
  }, [movies]);

  useEffect(() => {
    getFavoritesFromSessionStorage();
  }, []);

  let values: FavoriteMoviesStates = {
    favorite: movies,
    addMovies: AddMovieToFavorites,
    removeMovies: removeMovies,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
