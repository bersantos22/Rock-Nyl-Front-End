import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { api } from "../../api/api";
import "./MyAccount.css";

import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import { Button } from "../../Components/Button";

export function MyAccount() {
  const { loggedInUser } = useContext(AuthContext);
  const [test, setTest] = useState({
    _id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    async function fechUser() {
      try {
        const response = await api.get("account/profile");
        setTest({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fechUser();
  }, []);

  async function handleDelete() {
    try {
      await api.delete("/account/delete-account");
      window.location.href = "/";
      localStorage.removeItem("loggedInUser");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen mt-5 mb-5 flex flex-col">
      <div className="title2 mt-5 mb-5">
        <p>MY PROFILE</p>
      </div>
      <div className="bg-white shadow-2xl rounded ml-12 px-11 pt-6 pb-8 w-2/5">
        <div className="subtitle mx-4 mb-2">
          <p>
            <b>Id: </b>
            {`${test._id}`}
          </p>
          <p>
            <b>Name: </b>
            {`${test.name}`}
          </p>
          <p>
            <b>E-mail: </b>
            {`${test.email}`}
          </p>
        </div>
        <div className="ml-4">
          <Link to={`/editAccount`}>
            <Button className="bg-green-800 hover:bg-green-400 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline mr-6">
              Edit Perfil
            </Button>
          </Link>

          <Link to={`/___ROTA_DO_CARRINHO_AQUI___/${test._id}}`}>
            <Button className="bg-amber-600 hover:bg-amber-400 text-white font-bold py-2 px-6 mt-3 rounded focus:outline-none focus:shadow-outline mr-6 ">
              My Bag
            </Button>
          </Link>

          <Button
            className="bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-6 mt-3 rounded focus:outline-none focus:shadow-outline mr-6 "
            onClick={handleDelete}
          >
            Delete
          </Button>

          {loggedInUser.user.role === "ADMIN" ? (
            <Link to={"/adm/create-product"}>
              <Button className="bg-blue-600 hover:bg-amber-400 text-white font-bold py-2 px-6 mt-3 rounded focus:outline-none focus:shadow-outline mr-6 ">
                Create Product
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
