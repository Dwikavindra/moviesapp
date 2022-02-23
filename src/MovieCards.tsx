import React from "react";
type MovieCardsProps = {
  img: string;
  title: string;
  description: string;
};
function MovieCards(props: MovieCardsProps) {
  return (
    <div className="card border-2 border-solid border-white responsivecard mt-5">
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
  );
}

export default MovieCards;
