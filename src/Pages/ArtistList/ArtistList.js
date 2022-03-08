import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";

export function ArtistList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await api.get("/product/all-artists");
        setArtists([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArtists();
  }, []);

  const sortArtists = artists
    .map((currentArtist) => {
      return currentArtist.artist;
    })
    .sort();

  const filterDuplicatesArtists = sortArtists.filter(function (ele, pos) {
    return sortArtists.indexOf(ele) === pos;
  });

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col items-center">
        <p className="title2 text-3xl font-bold m-2 ">Artist List</p>
        <p className="subtitle text-lg font-bold font-mono tracking-tighter text-stone-600 mb-5">
          Search for your favorite artist!
        </p>
      </div>
      <div>
        <ul>
          {filterDuplicatesArtists.map((currentArtist) => {
            return (
              <Link key={currentArtist} to={`/product/artist/${currentArtist}`}>
                <li key={currentArtist}>{currentArtist}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
