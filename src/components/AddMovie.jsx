import React, { useState } from "react";
import Modalcomp from "./Modalcomp";

export default function AddMovie({setMovies}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        style={{
          backgroundColor: "#e50914",
          padding: " 7px 17px",
          color: "white",
          display: "flex",
          flexDirection: "row",
          borderRadius: "3px",
        }}
      >
        {" "}
        AddMovie{" "}
      </button>
      <Modalcomp setMovies={setMovies} show={show} handleClose={handleClose} />
    </div>
  );
}
