import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Commponents/Footer";
const Searchpage = () => {
  let navigate = useNavigate();
  let IMG = "https://image.tmdb.org/t/p/w1280";
  const [serdata, setSerdata] = useState([""]);
  const [val, setVal] = useState("");
  const [lodding, setLodding] = useState(true);
  const searchMovies = () => {
    setLodding(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=en-US&query=${val}&page=1&include_adult=true`
    )
      .then((res) => res.json())
      .then((sermovies) => {
        console.log(sermovies);
        setSerdata(sermovies.results);
        setLodding(false);
      });
  };
  const getvalue = (e) => {
    setVal(e.target.value);
  };

  const clickbut = () => {
    searchMovies();
    /*  if (deta.results.length === 0) {
      alert("Movies Not Found !");
    } */
  };

  return (
    <>
      <div className="serach-page-s">
        <div className="serach-s">
          <input
            className="search-input"
            type="search"
            placeholder="search..."
            onChange={getvalue}
          />
          <button className="search-button" onClick={clickbut}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="movies-component">
        <h1 className="name-movies">Search is :- {val} </h1>
        <div className="movies-list">
          <div className="movies-list-w">
            {lodding ? (
              <h1>Inter Movie Name</h1>
            ) : (
              serdata.map((res) => {
                /*  console.log(res) */
                return (
                  <>
                    <div
                      className="movies-card-l"
                      key={res.id}
                      onClick={() => navigate(`/${res.id}`)}
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
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Searchpage;
