import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { CardsAlbunsList } from "../../Components/cardsAlbunsList/cardsAlbunsList";

export function AlbumList() {
  const [album, setAlbuns] = useState([]);

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await api.get("/product/all-artists");
        setAlbuns([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbum();
  }, []);

  // const sortArtists = artists
  //   .map((currentGoal) => {
  //     return currentGoal.albumName;
  //   })
  //   .sort();

  // const filterDuplicatesArtists = sortArtists.filter(function (ele, pos) {
  //   return sortArtists.indexOf(ele) === pos;
  // });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold ">Album List</h1>
        <h1 className="text-lg font-bold font-mono tracking-tighter text-stone-500">
          Search for your favorite Album!
        </h1>
      </div>
      {/*     <div>
        <ul>
          {filterDuplicatesArtists.map((currentGoal) => {
            return <li key={currentGoal}>{currentGoal}</li>;
          })}
        </ul>
      </div> */}

      <div className="grid grid-cols-5 gap-4">
        {album.map((currentAlbum) => {
          return (
            <CardsAlbunsList
              key={currentAlbum._id}
              id={currentAlbum._id}
              url_img={currentAlbum.url_img}
              alt={currentAlbum.alt}
              albumName={`${currentAlbum.albumName.substring(0, 50)}...`}
              artist={currentAlbum.artist}
              description={`${currentAlbum.description.substring(0, 100)}...`}
              price={currentAlbum.price}
            />
          );
        })}
      </div>
    </div>
  );
}
