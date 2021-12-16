import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              document.body.style.backgroundColor = "tomato";
            }}
          >
            <div className="img-container">
              <img
                src="https://cdn.onebauer.media/one/media/5fac/0224/ceb4/e33d/d05b/2527/howls-moving-castle.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
                alt="home-logo"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            onClick={() => {
              document.body.style.backgroundColor = "lavender";
            }}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/people"
            onClick={() => {
              document.body.style.backgroundColor = "antiquewhite";
            }}
          >
            People
          </Link>
        </li>
        <li>
          <Link
            to="/locations"
            onClick={() => {
              document.body.style.backgroundColor = "lightskyblue";
            }}
          >
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
