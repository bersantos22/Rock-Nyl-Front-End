import * as Yup from "yup";

export default Yup.object().shape({
  artist: Yup.string().min(1).required("Artist Name Required").trim(),
  albumName: Yup.string().min(1).required().trim(),
  description: Yup.string().min(1).max(1500).required().trim(),
  type: Yup.string().min(1).max(128).required().trim(),
  details: Yup.string().max(64).required().trim(),
  price: Yup.number().required().positive(),
  stock: Yup.number().required().positive(),
});
