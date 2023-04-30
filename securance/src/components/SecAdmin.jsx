import React from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router";
import Home from "./Home";
import "../css/secadmin.css";
import AdmTran from "./AdmTran";

function SecAdmin(){
    const navigate = useNavigate();
    useEffect(()=>{
        const formDataString = localStorage.getItem('formData');
        if (formDataString) {
            const data = JSON.parse(formDataString);
            console.log(data);
        }
        else{
            alert("Login first !");
            navigate("/login");
        }
    },[])
    return (
        <>
            <Home />
            <div className="sec-admin">
                <h1>Securance Admin</h1>
                <AdmTran ide="1"/>
            </div>
        </>
    );
}

export default SecAdmin;