import React from "react";
import { Link } from "react-router-dom";
const Hamemenu = () => {
  return (
    <>
      <div className="hame-burgger">
        <div className="hame">
          <ul className="ul ulh">
            <li className="li">
              <Link className="a" to="/">
                Home
              </Link>
            </li>
            <li className="li">
              <Link className="a" to="/movies">
                Movies
              </Link>
            </li>
            <li className="li">
              <Link className="a" to="/TV">
                Tv shows
              </Link>
            </li>
            <div className="search searchh">
              <Link to="/search">
                <button className="ser-button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hamemenu;
