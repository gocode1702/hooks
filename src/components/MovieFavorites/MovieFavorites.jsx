import React, { useState } from "react";
import { Data } from "/src/assets/Data";
import Search from "./Search";
import MovieList from "./MovieList";


export default function MovieFavorites() {
  const [movies, setMovies] = useState(Data);
  const [searchWord, setSearchWord] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  return (
    <div>
      <Search
        setSearchWord={setSearchWord}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
        
      />

      <MovieList
        movies={
          searchWord
            ? movies.filter((e) =>
                e.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : searchRate
            ? movies.filter((e) => e.rate >= searchRate)
            : movies
        }
      />
    </div>
  );
}



