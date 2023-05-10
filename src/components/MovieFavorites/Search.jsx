import React from "react";
import Rate from "./Rate";
export default function Search({ setSearchWord, searchRate, setSearchRate }) {
  return (
    <div>
      <input
        type={"text"}
        placeholder="search movie"
        onChange={(event) => setSearchWord(event.target.value)}
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
