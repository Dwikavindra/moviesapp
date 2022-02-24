import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCards from "./MovieCards";
import { uid } from "uid";

type Movies = {
  id: number;
  title: String;
  img: String;
};
function App() {
  let individualMovies: Movies = {
    id: 0,
    title: "Spider Man",
    img: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/11/16/fep_b6mvgaanu5mjpg-20211116024702.jpg",
  };
  const [movies, setMovies] = useState<Movies[]>(
    Array(100).fill(individualMovies)
  );
  function generateMovies() {
    let newMovies = [...movies];
    let n: number = 0;
    for (let i = 0; i < 50; i++) {
      newMovies[i].id = n;
      console.log(n);
      console.log(newMovies);
      n++;
    }
  }
  useEffect(() => {
    generateMovies();
    console.log(movies);
  }, []);

  return (
    <div>
      <div className="flex max-w-full flex-row flex-wrap border-solid border-2 border-green-600 justify-center justify-evenly">
        <MovieCards
          img="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/11/16/fep_b6mvgaanu5mjpg-20211116024702.jpg"
          title="Spider Man"
          description="Reprehenderit proident ea tempor dolor cupidatat dolore incididunt veniam ad ut do officia id magna.Ex amet commodo ad tempor est ut consequat magna nostrud nostrud minim. Nisi Lorem proident elit irure consectetur amet do pariatur velit pariatur. Magna ut dolor reprehenderit officia laborum aliquip. Sit sit proident ea labore sint occaecat fugiat."
        ></MovieCards>
        <MovieCards
          img="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/11/16/fep_b6mvgaanu5mjpg-20211116024702.jpg"
          title="Spider Man"
          description="Reprehenderit proident ea tempor dolor cupidatat dolore incididunt veniam ad ut do officia id magna.\
          Anim laboris labore tempor laborum culpa enim esse laborum amet mollit est do mollit consequat. Officia ullamco non officia pariatur in laboris elit duis anim. Nisi irure consectetur dolore consectetur nostrud ex consequat velit eu tempor."
        ></MovieCards>
        <MovieCards
          img="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/11/16/fep_b6mvgaanu5mjpg-20211116024702.jpg"
          title="Spider Man"
          description="Reprehenderit proident ea tempor dolor cupidatat dolore incididunt veniam ad ut do officia id magna.Nostrud ad cupidatat minim magna ea cillum laborum in. Esse ullamco ex irure ullamco veniam adipisicing id esse et. Deserunt ullamco sint consectetur commodo aliquip ullamco aute."
        ></MovieCards>
        <MovieCards
          img="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/11/16/fep_b6mvgaanu5mjpg-20211116024702.jpg"
          title="Spider Man"
          description="Reprehenderit proident ea tempor dolor cupidatat dolore incididunt veniam ad ut do officia id magna.Adipisicing enim velit excepteur ad fugiat occaecat sint sint dolor. Laboris duis nisi voluptate non pariatur reprehenderit. Dolor nostrud minim incididunt qui Lorem consequat officia sint."
        ></MovieCards>
      </div>
    </div>
  );
}

export default App;
