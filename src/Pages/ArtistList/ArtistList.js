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
  const [itensPerPage, setItensPerPage] = useState(90);
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
        <div className="w-5/6 my-4">
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
        <div className="hidden ">
          <PaginationSelector
            itensPerPage={itensPerPage}
            setItensPerPage={setItensPerPage}
          />
        </div>
      </div>
      <div>
        <a href="/">ALL</a>
        <a href="/">A</a>
        <a href="/">B</a>
        <a href="/">C</a>
      </div>
      <div className="flex ">
        <ul className="grid grid-flow-col grid-rows-12 gap-1">
          {currentItens.map((currentArtist) => {
            return (
              <li className="textRobot bg-white shadow-sm rounded px-1 pt-1 pb-1 max-w-sm m-2 hover:text-sky-400" key={currentArtist}>
                <Link
                  key={currentArtist}
                  to={`/product/artist/${currentArtist}`}
                >
                  {currentArtist.length > 20
                    ? `${currentArtist.substring(0, 17)} ...`
                    : `${currentArtist}`}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-2 my-3">
        <PaginationComponent
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
