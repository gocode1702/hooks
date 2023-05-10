import React from 'react'
import "./MovieWstars.css"
import   MovieWstars from "./MovieWstars"

export default function MovieW() {
  return (
    <div>
      <div id="header">
        <div className="logo">FAVORITES</div>
        <div className="leftMenu">
          <ul>
            <li>
              <a href="Browse.html" className="dropdown">
                Browse
              </a>
            </li>
            <li>
              <a href="Kids.html">Kids</a>
            </li>
            <li>
              <a href="DVD.html">DvD</a>
            </li>
          </ul>
        </div>
        <div className="rightMenu">
          {" "}
          right menu
          <ul>
            <li>
              <a href="Search.html">Search</a>
            </li>
            <li>
              <a href="Bell.html">Bell</a>
            </li>
            <li>
              <a href="UserName.html">UserName</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="largeImage" style={{display:"flex"}}>
        <div className="description-box" >
         
        <h4> My canal Presents</h4>
          <h1> BADMAN RETURNS AGAIN!</h1>
          <h3> Coming November 3rd</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
            iaculis dolor, et mollis metus rutrum vel. Proin id massa eget lorem
            hendrerit efficitur. Maecenas venenatis eros ut rhoncus pretium.{" "}
          </p>
          <div className="button1"> Button 1</div>
          <div className="button2"> Button 2</div>
        </div>
        <div> 
          <MovieWstars />
        </div>

      </div>
      
       
    
    </div>
  );
}
