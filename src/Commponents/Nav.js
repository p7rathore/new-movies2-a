import React, { useState } from "react";
import Icon from "../Images/play.png";
import { Link } from "react-router-dom";
import Hamemenu from "../Commponents/Hamemenu";
const Nav = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="nav-baar">
        <div className="nav-icon-name">
          <img className="icon" src={Icon} alt="icon.jpg" />
          <h2 className="icon-site-name">Movierrific.</h2>
        </div>
        <ul className="ul">
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
        </ul>
        <div className="search">
          <input
            className="ser-input"
            type="search"
            placeholder="search movies tv shows"
          />
          <Link to="/search">
            <button className="ser-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        </div>
        {hide ? <Hamemenu /> : null}
        <div className="menu" onClick={() => setHide(!hide)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};

export default Nav;
