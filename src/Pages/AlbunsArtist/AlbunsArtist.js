import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardsAlbunsList } from "../../Components/cardsAlbunsList/cardsAlbunsList";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { PaginationSelector } from "../../Components/PaginationSelector/PaginationSelector";

export function AlbunsArtist() {
  const params = useParams();
  const [albuns, setAlbuns] = useState([]);

  const [itensPerPage, setItensPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(albuns.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = albuns.slice(startIndex, endIndex);

  useEffect(() => {
    let abortController = new AbortController();
    async function fetchArtistAlbuns() {
      try {
        const response = await api.get(`/product/artist/${params.artist}`);

        setAlbuns([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArtistAlbuns();

    return () => {
      abortController.abort();
    };
  }, [params.artist]);

  useEffect(() => {
    let abortController = new AbortController();
    setCurrentPage(0);

    return () => {
      abortController.abort();
    };
  }, [itensPerPage]);

  return (
    <div className="container mx-auto mt-5 mb-2">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold ">{params.artist}</p>
        <p className="subtitle text-lg font-bold tracking-tighter text-stone-600">
          Search for your favorite album of {params.artist}!
        </p>
      </div>

      <div>
        <p>
          <b>{albuns.length}</b> results found
        </p>

        <PaginationSelector
          itensPerPage={itensPerPage}
          setItensPerPage={setItensPerPage}
        />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {currentItens.map((currentAlbum) => {
          return (
            <CardsAlbunsList
              key={currentAlbum._id}
              id={currentAlbum._id}
              url_img={currentAlbum.url_img}
              alt={currentAlbum.alt}
              albumName={
                currentAlbum.albumName.length > 50
                  ? `${currentAlbum.albumName.substring(0, 50)} ...`
                  : `${currentAlbum.albumName}`
              }
              artist={currentAlbum.artist}
              description={`${currentAlbum.description.substring(0, 100)}...`}
              price={currentAlbum.price}
            />
          );
        })}
      </div>

      <div className="p-2">
        <PaginationComponent
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
