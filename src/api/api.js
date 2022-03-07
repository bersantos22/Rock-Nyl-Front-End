import axios from "axios";

<<<<<<< HEAD
const apisURL = {
  development: "http://localhost:4000/api/v0",
  production: "https://vita-auctor-server.herokuapp.com/api/v0",
};

const api = axios.create({
  baseURL: apisURL[process.env.NODE_ENV],
});
=======
const api = axios.create({ baseURL: "http://localhost:4000" });
>>>>>>> 7a0d32b67370e15cfaedfda757465d873ceeabcd

api.interceptors.request.use((config) => {
  const json = localStorage.getItem("loggedInUser");
  const loggedInUser = JSON.parse(json || '""');

  if (loggedInUser.token) {
    config.headers = { Authorization: `Bearer ${loggedInUser.token}` };
  }

  return config;
});

export { api };
