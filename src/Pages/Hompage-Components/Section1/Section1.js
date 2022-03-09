import React from "react";
import "./Section1.css";
import { Link } from "react-router-dom";

export function Section1() {
  return (
    <section className="section1 w-full relative">
      <div className="firstText w-full">
        <div className="bigText w-full">
        Your Vinyl Record Web Store
        </div>
        <Link to='/genres-list'>
        <div className="littleText">
          <p>BUY NOW !</p>
        </div>
        </Link>
      </div>
    </section>
  );
}
