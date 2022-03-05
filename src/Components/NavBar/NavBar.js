import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";
import vinyl from "../../images/kindpng_810924.png";

export function NavBar() {
  return (
    <nav>
      <div className="iconTitle">
        <div>
          <img className="imgVinyl" src={vinyl} alt="discImg"></img>
        </div>
        <div>
          <Link className="nav-link title" to="/#">
            Rock'Nyl
          </Link>
        </div>
      </div>
      <div className="linksPage">
        <ul className="listUl">
          <li className="listLi">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="listLi">
            <Link className="nav-link text-light" to="/artists-list">
              Shop By Artist
            </Link>
          </li>

          <li className="listLi">
            <Link className="nav-link text-light" to="/">
              Shop By Genres
            </Link>
          </li>

          <li className="listLi">
            <Link className="nav-link" to="/aboutUs">
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
