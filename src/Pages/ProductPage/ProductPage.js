import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { Section2 } from "../Hompage-Components/Section2/Section2";

export function ProductPage() {
  const params = useParams();

  const [album, setAlbum] = useState({
    url_img: "",
    artist: "",
    albumName: "",
    type: "",
    price: "",
    description: "",
    details: "",
  });

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await api.get(`/product/album/${params.id}`);
        setAlbum({ ...response.data[0] });
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbum();
  }, [params.id]);

  return (
    <section className='w-full mt-10 mb-12 pr-3'>
      <SingleProduct
        img={album.url_img}
        artist={album.artist}
        albumName={album.albumName}
        type={album.type}
        price={album.price}
        description={album.description}
        details={album.details}
      />


    </section>
  );
}
