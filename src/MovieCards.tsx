import React from "react";
import { Link } from "react-router-dom";
type MovieCardsProps = {
  id: number;
  img: string;
  title: string;
  description: string;
};
const imageUrl: string = "//image.tmdb.org/t/p/original//";
function MovieCards(props: MovieCardsProps) {
  return (
    <Link to={`/details/${props.id}`}>
      <div className="mt-5">
        <div className=" justify-center items-center card__body flex flex-col flex-wrap">
          <div className="relative">
            <img
              className="responsiveimg"
              src={`${imageUrl}${props.img}`}
            ></img>

            <div className="image_overlay">
              <div className="overflow-y-auto ">
                <span className=" text-white inline-block">
                  {props.description}
                </span>
              </div>
            </div>
          </div>
          <h2 className="card_title">{props.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default MovieCards;
