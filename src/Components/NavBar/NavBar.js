import { Link } from "react-router-dom";
import { useContext } from "react";
import "./NavBar.css";
import vinyl from '../../images/logoRockNyl.png'

export function NavBar() {
  return (

    <nav className="navClass w-full">
    <div className="divNav w-full">
      <div className="iconTitle">
        <div>
          <img className="imgVinyl" src={vinyl} alt="discImg"></img>
          </div>
          <div className="titleNav">
            <Link className="nav-link title" to="/#">
              Rock'Nyl
            </Link>
          </div>
        </div>
        <div className="linksPage">
          <ul className="listUl">
            <li className="listLi">
              <Link className="nav-link text-light" to="/artists-list">
                Shop By Artist
              </Link>
            </li>

            <li className="listLi">
              <Link className="nav-link text-light" to="/albuns-list">
                Shop By Album
              </Link>
            </li>

            <li className="listLi">
              <Link className="nav-link" to="/myAccount">
                My Account
              </Link>
            </li>
            <li className="listLi">
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </li>
            <li className="listLi">
              <Link className="nav-link" to="/signUp">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
