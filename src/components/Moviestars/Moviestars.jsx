import React, { useState } from "react";
import MovieList from "../MovieFavorites/MovieList";
import Rate from "../MovieFavorites/Rate";
import { Data } from "/src/assets/Data";
function SearchStars({ setSearchStars, searchRate, setSearchRate }) {
  return (
    <div>
      <input
        type={"text"}
        placeholder="search movie"
        onChange={(event) => setSearchStars(event.target.value)}
        style={{
          backgroundColor: "#e50914",
          padding: " 7px 17px",
          color: "white",
          display: "flex",
          flexDirection: "row",
          borderRadius: "3px",
        }}
      />
      <Rate rate={searchRate} setSearchRate={setSearchRate} />
    </div>
  );
}

export default function Moviestars() {
  const [movies, setMovies] = useState(Data);

  const [searchStars, setSearchStars] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  return (
    <div className="">
      <SearchStars
        setSearchStars={setSearchStars}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />

      <MovieList
        movies={
          searchRate ? movies.filter((e) => e.rate == searchRate) : movies
        }
      />
    </div>
  );
}
