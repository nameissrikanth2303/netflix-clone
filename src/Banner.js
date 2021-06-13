import React, {useState } from "react";

import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setmovie] = useState();

  useState(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
      }}
    >
      <div className="banner_content">
        <h2 className="banner-title">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h2>
        <button className="banner_button">Play</button>
        <button className="banner_button">My list</button>

        <article className="banner_description">{movie?.overview}</article>
      </div>

      <div className="fade-banner"></div>
    </header>
  );
}
export default Banner;
