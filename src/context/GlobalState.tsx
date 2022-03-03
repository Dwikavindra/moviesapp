import { create } from "domain";
import React, { createContext, useReducer, useEffect } from "react";
import { Favorites } from "../Favorites";
import { FavoriteMoviesType } from "./FavoriteMoviesType";

//initial state
type states = {
  favorite: FavoriteMoviesType[];
};
let initialState: states = {
  favorite: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};
