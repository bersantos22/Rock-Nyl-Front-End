import React from "react";
import { useState, useEffect } from "react";
import { api } from "../../api/api";


export function MyAccount() {
    const [test, setTest] = useState({
      _id: "",
      name: "",
      email: ""
    
    });
  
    useEffect(() => {
      async function fechUser() {
        try {
          const response = await api.get("account/profile");
          console.log(response.data);
          setTest({ ...response.data });
        } catch (error) {
          console.error(error);
        }
      }
      fechUser();
    }, []);
  
    return (
      <>
        <h1>{`Meu nome: ${test.name}. Meu email: ${test.email}. Meu id: ${test._id}`}</h1>
      </>
    );
  }