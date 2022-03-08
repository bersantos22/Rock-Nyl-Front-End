import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { PaginationSelector } from "../../Components/PaginationSelector/PaginationSelector";

export function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [rerender, setRerender] = useState(true);
  const [backup, setBackup] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await api.get("/product/all-artists");
        setArtists([...response.data]);
        setBackup([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArtists();
    setRerender(false);
  }, [rerender]);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  const sortArtists = artists
    .map((currentArtist) => {
      return currentArtist.artist;
    })
    .sort();

  const filterDuplicatesArtists = sortArtists.filter(function (ele, pos) {
    return sortArtists.indexOf(ele) === pos;
  });

  function filterArtist(searchParams) {
    if (searchParams === "") {
      setArtists([...backup]);
      return;
    }

    const filtered = artists.filter((currentArtist) => {
      return currentArtist.artist
        .toLowerCase()
        .includes(searchParams.toLowerCase());
    });

    setArtists(filtered);
  }

  const pages = Math.ceil(filterDuplicatesArtists.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = filterDuplicatesArtists.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col items-center">
        <p className="title2 text-3xl font-bold m-2 ">Artist List</p>
        <p className="subtitle text-lg font-bold font-mono tracking-tighter text-stone-600 mb-5">
          Search for your favorite artist!
        </p>
      </div>

      <div className="flex justify-between  ">
        <div className="w-5/6">
          <SearchBar
            placeholder="Search for your favorite Artist!"
            filterList={filterArtist}
          />
        </div>
        <div>
          <span>
            <b>{filterDuplicatesArtists.length}</b> results found
          </span>
        </div>
        <div>
          <PaginationSelector
            itensPerPage={itensPerPage}
            setItensPerPage={setItensPerPage}
          />
        </div>
      </div>

      <div>
        <ul>
          {currentItens.map((currentArtist) => {
            return (
              <Link key={currentArtist} to={`/product/artist/${currentArtist}`}>
                <li key={currentArtist}>{currentArtist}</li>
              </Link>
            );
          })}
        </ul>
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
