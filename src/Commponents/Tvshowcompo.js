import React, { useEffect, useState } from "react";
import NextpreTvshowpage from "./NextpreTvshowpage";
const Tvshowcompo = () => {
  let IMG = "https://image.tmdb.org/t/p/w1280";
  const [tvdatashow, setTvdatashow] = useState([""]);
  const [pagecount, setPagecount] = useState([""]);
  const [incount, setIncount] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=f25a85c11354cad69a2a3d1b9bc9e6b9&language=hi&page=${incount}`
    )
      .then((res) => res.json())
      .then((tvshowsdata) => {
        setPagecount(tvshowsdata);
        setTvdatashow(tvshowsdata.results);
      });
  });

  const Next = () => {
    setIncount(incount + 1);
  };

  const priview = () => {
    setIncount(incount - 1);
  };

  return (
    <>
      <div className="movies-component">
        <h1 className="pages-name-tvshows">Tv shows</h1>
        <div className="movies-list">
          <div className="movies-list-w">
            {tvdatashow.map((res) => {
              return (
                <>
                  <div
                    className="movies-card-l"
                    key={res.id}
                    onClick={() => alert("Sorry! Not Found Page - TV shows")}
                  >
                    <img
                      className="card-images-i"
                      src={IMG + res.poster_path}
                      alt="tv show .jpg"
                    />
                    <h1 className="movies-list-name">{res.name}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <NextpreTvshowpage
        pagecount={pagecount}
        nextppage={Next}
        priviewpage={priview}
      />
    </>
  );
};

export default Tvshowcompo;
