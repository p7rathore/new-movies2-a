import React from "react";
import Nav from "../Commponents/Nav";
import ImagesSlider from "../Commponents/ImagesSlider";
import PopularHmovies from "../Commponents/PopularHmovies";
import Topratatehmovies from "../Commponents/Topratatehmovies";
import PopularTvshows from "../Commponents/PopularTvshows";
import ToratedTvshows from "../Commponents/ToratedTvshows";
import Footer from "../Commponents/Footer";
const Home = () => {
  return (
    <>
      <Nav />
      <ImagesSlider />
      <PopularHmovies/>
      <Topratatehmovies/>
      <PopularTvshows/>
      <ToratedTvshows/>
      <Footer/>
    </>
  );
};

export default Home;
