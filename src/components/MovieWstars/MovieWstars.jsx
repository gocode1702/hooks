import React, { useState } from "react";
import MovieList from "../MovieFavorites/MovieList";
import Rate from "../MovieFavorites/Rate";
import { Data } from "/src/assets/Data";
function SearchWStars({ setSearchWStars, searchRate, setSearchRate }) {
  return (
    <div>
      <input
        type={"text"}
        placeholder="search movie"
        onChange={(event) => setSearchWStars(event.target.value)}
        style={{
          backgroundColor: "#e50914",
          padding: " 7px 17px",
          color: "white",
          display: "flex",
          flexDirection: "row",
          borderRadius: "3px",
        }}
      />
     <button style={{ marginTop: "25px !important",
  display: "inline-block",
  padding: "12px 20px",
  background: "#000",
  color: "#fff",
  cursor: "pointer",}}> <Rate rate={searchRate} setSearchRate={setSearchRate}  /> </button>
    </div>
  );
}

export default function MovieWstars() {
  const [movies, setMovies] = useState(Data);

  const [searchWStars, setSearchWStars] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  return (
    <div className="">
      <SearchWStars
        setSearchWStars={setSearchWStars}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />

      <MovieList
        movies={
          searchWStars
            ? [
                movies.find((e) =>
                  e.title.toLowerCase().includes(searchWStars.toLowerCase())
                ),
                ...movies.filter(
                  (e) =>
                    e.title
                      .toLowerCase()
                      .includes(searchWStars.toLowerCase()) == false
                ),
              ]
            : searchRate
            ? movies.filter((e) => e.rate <= searchRate)
            : movies
        }
      />
    </div>
  );
}
