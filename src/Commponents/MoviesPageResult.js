import React, { useState } from "react";
import { useParams } from "react-router-dom";
const MoviesPageResult = () => {
  const { id } = useParams();
  let IMG = "https://image.tmdb.org/t/p/w1280";
  const [getdat, setGetdata] = useState([""]);
  const [gen, setGen] = useState([""]);
  const [getvid, setGetvid] = useState([""]);
  const getdetailsmovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=en-US`
    )
      .then((res) => res.json())
      .then((getdata) => {
        /*  console.log(getdata); */
        setGetdata(getdata);
        setGen(getdata.genres);
      });
  };
  getdetailsmovies();

  const getvideos = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=en-US`
    )
      .then((res) => res.json())
      .then((getvideos) => {
        /*  console.log(getvideos.results) */
        setGetvid(getvideos.results);
      });
  };
  getvideos();

  return (
    <>
      <div className="result-page-movies">
        <div className="movies-result">
          <img
            className="movies-imges-result-page"
            src={IMG + getdat.backdrop_path}
            alt="movies.jpg"
          />
          <h1 className="text-movies-name">{getdat.title}</h1>
        </div>
      </div>
      {/*  */}
      <div className="overview-paragraf">
        <div className="o-para">
          <p className="paragarf">{getdat.overview}</p>
        </div>
      </div>

      <div className="movies-video-trailers">
        <div className="movies-tra">
          {getvid.map((res) => {
            /*  console.log(res) */
            if (res.type === "Trailer") {
              /*    console.log(res); */
              return (
                <>
                  <div className="movies-trailer-1">
                    <iframe
                      title="u"
                      src={`https://www.youtube.com/embed/${res.key}?controls=0`}
                      className="ifram"
                    ></iframe>
                  </div>
                </>
              );
            }
            return <></>;
          })}
        </div>
      </div>

      <div className="genres">
        <h1 className="gen-text">genres</h1>
        <div className="genres-names">
          {gen.map((res) => {
            return (
              <>
                <div className="genres-text-div">
                  <p className="genres-text-p">{res.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="more-details">
        <div className="m-details">
          <div className="box-more-details">
            <p className="name-more-details">original_language</p>
            <div className="name-of-lauguages">
              <p className="name-laung">{getdat.original_language}</p>
            </div>
          </div>

          <div className="box-more-details">
            <p className="name-more-details">budget</p>
            <div className="name-of-lauguages">
              <p className="name-laung">{getdat.budget}</p>
            </div>
          </div>

          <div className="box-more-details">
            <p className="name-more-details">popularity</p>
            <div className="name-of-lauguages">
              <p className="name-laung">{getdat.popularity}</p>
            </div>
          </div>

          <div className="box-more-details">
            <p className="name-more-details">status</p>
            <div className="name-of-lauguages">
              <p className="name-laung">{getdat.status}</p>
            </div>
          </div>

          <div className="box-more-details">
            <p className="name-more-details">vote_average</p>
            <div className="name-of-lauguages">
              <p className="name-laung"> {getdat.vote_average}%</p>
            </div>
          </div>

          <div className="box-more-details">
            <p className="name-more-details">vote_count</p>
            <div className="name-of-lauguages">
              <p className="name-laung">{getdat.vote_count}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* simular movies */}
    </>
  );
};

export default MoviesPageResult;
