import React, { useState } from "react";
import "./App.css";

import logo from "./assets/profilforme.jpg";
import { Data } from "./assets/Data";
import ProductList from "./components/Carousel";
import Moviestars from "./components/Moviestars/Moviestars";
import MovieFavorites from "./components/MovieFavorites/MovieFavorites";
import MovieW from "./components/MovieWstars/MovieW"
import AddMovie from "./components/AddMovie";
import MovieAccordion from "./components/MovieAccordion/MovieAccordion";




export default function App() {
  const[movies , setMovies]=useState(Data) ;
  return (
    <div>
      <div className="wrapper"></div>
      <div className="main">
        <div class="topnav">
          <a href="#home">
            {" "}
            <img src={logo} className="fadeinout" id="logo" />
          </a>
          <a href="#about">My CANAL</a>
          <a href="#featured">Featured</a>
          <a href="#series">Series</a>
          <a href="#originals">Originals</a>
          <a href="#info">Info</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="area">
          <h1 id="about">My CANAL 7</h1>
          <h2>
            Unlimited movies, TV
            <br />
            shows, and more.
          </h2>
          <h6>Watch anywhere. Cancel anytime.</h6>
          <div className="search">
            <input type="text" className="box" placeholder="Email" />
            <span className="try">
              Try 30 days free
              <i className="fas fa-chevron-right" />
            </span>
          </div>
          <h4>
            Ready to watch? Enter your email to create or access your account
          </h4>
        </div>
      </div>
      <div className="container1">
        <div className="text">
          <h1 id="featured">Featured</h1>
          <h1>Enjoy on your TV.</h1>
          <p>
            Watchx on Smart TVs, Playstation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray players, and
            <br />
            more.
          </p>
        </div>
        <div className="image">
          <ProductList Data={Data} />
        </div>
      </div>
      <div className="container1" id="series">
        <MovieW />
      </div>
      <div
        className="container1"
        style={{
          backgroundImage:
            "url('https://thumbs.gfycat.com/AffectionateInfiniteGuernseycow-size_restricted.gif')",
        }}
      >
        <div className="image">
          <AddMovie setMovies={setMovies} />
          <MovieFavorites />
        </div>
        <div className="text">
          <h1>Download your shows to watch on the go.</h1>
          <p>Save your data and watch all your favorites offline.</p>
        </div>
      </div>
      <div className="container1">
        <div className="text">
          <h1 id="originals">Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on
            <br />
            your phone, tablet, laptop, and TV without paying more.
          </p>
        </div>
        <div className="image">
          <Moviestars />
        </div>
      </div>
      <div
        className="question"
        style={{
          backgroundImage:
            "url('https://thumbs.gfycat.com/AffectionateInfiniteGuernseycow-size_restricted.gif')",
        }}
      >
        <h1 id="info">Frequently Asked Questions</h1>
        <div className="quest">
          <div className="textbox">What is CANAL7?</div>
          <i className="las la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">How much does CANAL7 cost?</div>
          <i className="las la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">Where can I watch?</div>
          <i className="las la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">How do I cancel?</div>
          <i className="las la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">What can I watch on CANAL7??</div>
          <i className="las la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">What is CANAL7?</div>
          <i className="las la-plus" />
        </div>
        <div className="search1">
          <input type="text" className="box1" placeholder="Email" />
          <span className="try1">
            Try 30 days free
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <h4>
          Ready to watch? Enter your email to create or access your account
        </h4>
      </div>
      <div className="footer">
        <h1 id="contact">Contact</h1>
        <div className="footercon">
          <div className="flex1">
            <h5>Questions? Call 52477488</h5>
            <h5 />
          </div>
          <ul className="list1">
            <li>
              <a href>FAQ</a>
            </li>
            <li>
              <a href>Investor Relation</a>
            </li>
            <li>
              <a href>Ways to Watch</a>
            </li>
            <li>
              <a href>Corporate Information</a>
            </li>
            <li>
              <a href>CANAL Originals</a>
            </li>

            <li>
              <a href> </a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a href>Home</a>
            </li>
            <li>
              <a href>Jobs</a>
            </li>
            <li>
              <a href>Terms of Use</a>
            </li>
            <li>
              <a href>Contact Us</a>
            </li>
            <li>
              <a href>#</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a href>Account</a>
            </li>
            <li>
              <a href>Redeem Gift Cards</a>
            </li>
            <li>
              <a href>Privacy</a>
            </li>
            <li>
              <a href>Speed Test</a>
            </li>
            <li>
              <a href>#</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a href>Media Center&lt;</a>
            </li>{" "}
            <li>
              <a href>Buy Gift Cards</a>
            </li>{" "}
            <li>
              <a href>Cookie Preferences</a>
            </li>{" "}
            <li>
              <a href>Legal Notices</a>
            </li>{" "}
            <li>
              <a href>#</a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <div className="end">
        {" "}
        <h2> TUNIS-CANAL </h2>
        <h2> </h2>{" "}
      </div>
      <MovieAccordion  />
    </div>
  );
}
