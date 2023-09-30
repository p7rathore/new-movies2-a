import React, { useEffect, useState } from "react";
import Nextpagemovies from "./Nextpagemovies";
import { useNavigate } from "react-router-dom";
const MoviesComponent = () => {
  let naviagte = useNavigate();
  const [mdata, setMdata] = useState([""]);
  const [pages, setPages] = useState([""]);
  const [pagenumber, setPagenumber] = useState(1);
  let IMG = "https://image.tmdb.org/t/p/w1280";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=en-US&page=${pagenumber}`
    )
      .then((res) => res.json())
      .then((moviesdata) => {
        /* console.log(moviesdata); */
        setPages(moviesdata);
        setMdata(moviesdata.results);
      });
  });

  const Next = () => {
    setPagenumber(pagenumber + 1);
  };
  const priview = () => {
    setPagenumber(pagenumber - 1);
    /*  alert(tpage) */
  };

  return (
    <>
      <div className="movies-component">
        <h1 className="name-movies">Movies</h1>
        <div className="movies-list">
          <div className="movies-list-w">
            {mdata.map((res) => {
              return (
                <>
                  <div
                    className="movies-card-l"
                    key={res.id}
                    onClick={() => naviagte(`/${res.id}`)}
                  >
                    <img
                      className="card-images-i"
                      src={IMG + res.poster_path}
                      alt="card-images.jpg"
                    />
                    <h2 className="movies-list-name">{res.title}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Nextpagemovies
        pagesmovies={pages}
        Nextpagebutton={Next}
        preiviewpagebutton={priview}
      />
    </>
  );
};

export default MoviesComponent;
