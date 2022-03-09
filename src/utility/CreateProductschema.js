import * as Yup from "yup";

export default Yup.object().shape({
  artist: Yup.string().min(1).required("Artist Name Required"),
  albumName: Yup.string().min(1).required("Album Name Required"),
  description: Yup.string().min(1).max(1500).required("Description Required"),
  type: Yup.string().min(1).max(128).required("Type Product Required"),
  details: Yup.string().max(64).required("Details Required"),
  price: Yup.number().required("Price Required").positive(),
  stock: Yup.number().required("Stock Required").positive(),
});
