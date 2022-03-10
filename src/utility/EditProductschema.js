import * as Yup from "yup";

export default Yup.object().shape({
  artist: Yup.string().min(1).required(),
  albumName: Yup.string().min(1).required(),
  description: Yup.string().min(1).max(1500).required(),
  type: Yup.string().min(1).max(128).required(),
  price: Yup.number().positive().required(),
  stock: Yup.number().positive().required(),
});
