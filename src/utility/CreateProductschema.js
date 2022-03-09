import * as Yup from "yup";

export default Yup.object().shape({
  artist: Yup.string().min(1).required("Artist Name Required"),
  albumName: Yup.string().min(1).required(),
  description: Yup.string().min(1).max(1500).required(),
  type: Yup.string().min(1).max(128).required(),
  details: Yup.string().max(64).required(),
  price: Yup.number().required().positive(),
  stock: Yup.number().required().positive(),
});
