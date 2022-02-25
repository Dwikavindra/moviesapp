import React from "react";
import { Link } from "react-router-dom";
type MovieCardsProps = {
  id: number;
  img: string;
  title: string;
  description: string;
};
function MovieCards(props: MovieCardsProps) {
  return (
    <Link to={`/details/${props.id}/${props.img}/${props.description}`}>
      <div className="card  responsivecard mt-5">
        <div className=" justify-center items-center card__body flex flex-col flex-wrap">
          <div className="relative">
            <img className="responsiveimg block" src={props.img}></img>

            <div className="image_overlay">
              <div className="card_description overflow-auto">
                <p className="card__description text-white">
                  {props.description}
                </p>
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
