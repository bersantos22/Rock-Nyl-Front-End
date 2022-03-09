import React from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function SingleProduct(props) {
  const { loggedInUser } = useContext(AuthContext);
  const params = useParams();

  return (
    <div className="sectionSingle flex flex-row items-center container mx-auto ">
      <div className="img-product justify-center container mx-auto">
        <div className="imgLeft">
          <img className="imgProduct" src={props.img} alt="imgSingleProduct" />
        </div>
      </div>

      <div className="right-description container mx-auto flex flex-col content-center">
        <div className="productTittle">
          <h1>
            {props.artist}:{props.albumName}
          </h1>
          <p>{props.type}</p>
        </div>

        <div className="productPrice mt-2">
          <span>
            {props.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>

        <div className="productDescription">
          <p>{props.description}</p>
        </div>

        <div className="divBtnProduct mt-3">
          <Link to="#">
            <button type="button" className="btnProduct ">
              ADD TO BAG
            </button>
          </Link>
        </div>
        <div className="productDetails">
          <span>Details: {props.details}</span>
        </div>
        <div>
          {loggedInUser.user.role === "ADMIN" ? (
            <Link to={`/edit-product/${params.id}`}>EDIT PRODUCT</Link>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}
