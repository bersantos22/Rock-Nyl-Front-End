import React from "react";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import './MyAccount.css'

export function MyAccount(){
    const params = useParams();
    const [user, setUser] = useState([]);

    useEffect(()=>{
        async function fetchUser(){
            try{
                const response = await api.get(`/product/artist/${params.id}`);
            } catch(error) {
                console.error(error);
            }
        }
    })
    return(
        <>
            
        </>
    )
}