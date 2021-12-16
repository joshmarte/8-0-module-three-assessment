import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://cdn.onebauer.media/one/media/5fac/0224/ceb4/e33d/d05b/2527/howls-moving-castle.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
              alt="home-logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
