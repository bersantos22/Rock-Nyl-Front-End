import React from "react";
import "./Footer.css";
import vinyl from "../../images/kindpng_810924.png";

export function Footer() {
  return (
    <footer>
      <div className="TextFooter">
        <div className="footerRock">
          <div>
            <img className="imgVinyl2" src={vinyl} alt="discImg"></img>
          </div>

          <div> ROCK'NYL</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>Rock'Nyl ©2022 All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
}
