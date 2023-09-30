import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PopularHmovies = () => {
  let navigate = useNavigate();
  let IMG = "https://image.tmdb.org/t/p/w1280";
  const [popularmdata, setPopularmdata] = useState([""]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((populardata) => {
        /*  console.log(populardata); */
        setPopularmdata(populardata.results);
        /*  console.log(popularmdata) */
      });
  });

  let crousel = document.querySelector(".card");

  const preview = () => {
    crousel.scrollLeft -= 250;
  };
  const next = () => {
    crousel.scrollLeft += 250;
  };

  return (
    <>
      <div className="popular-movies">
        <h1 className="popular-movie-text">Popular Movies</h1>
        <div className="movies-po">
          <div className="card" id="crousel">
            {popularmdata.map((res) => {
              /*  console.log(res) */
              return (
                <>
                  <div
                    className="card-div-sec"
                    key={res.id}
                    onClick={() => navigate(`/${res.id}`)}
                  >
                    <img
                      className="card-img"
                      src={IMG + res.poster_path}
                      alt="card.jpg"
                    />
                    <h2 className="card-movies-name">{res.title}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="next-pre-btn">
          <button className="pre-button" onClick={preview}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next-button" onClick={next}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularHmovies;
