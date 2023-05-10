import React from 'react';
// import { Card, CardTitle, CardImg, CardBody, CardText , Button} from 'reactstrap';
import Rate from './Rate';
// import { Carousel } from "react-bootstrap";
// import { Player } from "video-react";

export default function MovieCard  ({
  movieDetails: { id, title, posterUrl, description, rate }
  
}) {
  return (
    <div
      style={{
        width: "40vw",
        height: "55vh",
        margin: "2rem",
        padding: "1rem",
        border: "3px solid black",
      }}
    >
      <h5 style={{ textAlign: "center", color: "white" }}> {title} </h5>
      <img src={posterUrl} style={{ width: "100%", height: "100%" }} />

      <p style={{ fontSize: ".5rem", color: "white" }}>{description}</p>
      <button
        style={{
          marginTop: "25px !important",
          display: "inline-block",
          padding: "12px 20px",
          background: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {" "}
        <Rate rate={rate} />
      </button>
    </div>
  );
};

 
//       
//       
//     
//   