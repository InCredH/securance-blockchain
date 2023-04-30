import React from "react";
import "../css/Cyber.css";
import Cybercomp from "./Cybercomp";
import { Link, useNavigate } from 'react-router-dom';
function CyberAdmin(){
    return (
        <> 
            <nav className="naver">
                <div className="navbar-brand">Cyber Security Agency of India</div>
            </nav>
            <h1 className='cyber-adh1'>Cyber Security ADMIN</h1>
            <div className= "cyber-ad">
                <Cybercomp />
                <Cybercomp />
            </div>
        </>
    );
}

export default CyberAdmin;