import { Link } from "react-router-dom";

export function CardsAlbunsList(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`/product/album/${props.id}`}>
        <img
          className="w-full"
          src={props.url_img}
          alt={`album ${props.albumName}`}
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2">
          <p>{props.albumName}</p>
        </div>
        <div className="font-bold text-m mb-2">
          <p>{props.artist}</p>
        </div>
        <p className="text-gray-700 text-sm">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Buy Now
        </span>
        <span className="inline-block  text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    </div>
  );
}
