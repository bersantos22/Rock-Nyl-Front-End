import React from "react";
import "./LittleCard.css"
import { Link } from "react-router-dom";

export function LittleCard(props){
    return(
        <div className="containerCard">
        <div className="little-card">
            <img  src={props.img} alt="img" className="card__img"/> 
             <div className="card__content">
                 <div className="card__data">
                     <h1 className="card__title">{props.artist}</h1>
                     <h4 className="card__title album"> {props.albumName}</h4>
                     <span className="card__preci">{props.price}</span>
                     <p className="card__description">{props.description}</p>
                     <Link to="/" className="card__button">Buy Now</Link>
                 </div>
            </div> 
        </div>
    </div>
    )
}
