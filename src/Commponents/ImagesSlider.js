import React, { useState } from "react";
const ImagesSlider = () => {
  const [popularmoviesdata, setPopularmoviesdata] = useState([""]);
  const [incount, setIncount] = useState(0);
  const [lencount, setLencount] = useState([""]);
  let IMG = "https://image.tmdb.org/t/p/w1280";
  const PopularMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((Pmovies) => {
     /*    console.log(Pmovies); */
        setLencount(Pmovies.results);
        setPopularmoviesdata(Pmovies.results[incount]);
      });
  };
  PopularMovies();

  setTimeout(() => {
    nextshowmovies();
  }, 8000);

  const nextshowmovies = () => {
    setIncount(incount === lencount.length - 1 ? 0 : incount + 1);
  };

  return (
    <>
      <div className="images-slider">
        <div className="sli-img">
          <div className="">
            <img
              className="images-im"
              src={IMG + popularmoviesdata.backdrop_path}
              alt="poster.jpg"
            />
            <div className="image-details">
              <div className="image-deatils-di">
                <h1 className="poster-name">{popularmoviesdata.title}</h1>
                <p className="poster-p">{popularmoviesdata.overview}</p>
                <h2 className="relese-date">
                  release_date :{popularmoviesdata.release_date}
                </h2>
                <div className="two-di">
                  <div className="gen1">Fantasy</div>
                  <div className="gen2">Adventure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesSlider;
