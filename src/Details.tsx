import { Route, useParams, Routes } from "react-router-dom";
function Details() {
  const { title, id, image, description } = useParams();
  return (
    <div>
      Hello World{id}
      <p>{description}</p>
    </div>
  );
}

export default Details;
