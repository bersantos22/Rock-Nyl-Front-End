import { useState, useEffect } from "react";
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
    .map((currentGoal) => {
      return currentGoal.artist;
    })
    .sort();

  const filterDuplicatesArtists = sortArtists.filter(function (ele, pos) {
    return sortArtists.indexOf(ele) === pos;
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold ">Artist List</h1>
        <h1 className="text-lg font-bold font-mono tracking-tighter text-stone-500">
          Search for your favorite artist!
        </h1>
      </div>
      <div>
        <ul>
          {filterDuplicatesArtists.map((currentGoal) => {
            return <li key={currentGoal}>{currentGoal}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
