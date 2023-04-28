import React from "react";
import "../css/Cyber.css";
import ClaimForm from "./CyberForm";

function CyberHome(){
    return (
        // navbar
        <>
            <nav className="naver">
                <div className="navbar-brand">Cyber Security Agency of India</div>
            </nav>
            <ClaimForm />
        </>
    );
}

export default CyberHome;