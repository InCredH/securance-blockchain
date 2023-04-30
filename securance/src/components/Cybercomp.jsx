import React from "react";
import "../css/Cyber.css";
import { Link, useNavigate } from 'react-router-dom';

function Cybercomp(props){
    return (
        <>
            <div className='comp-box'>
                <div className="left-comp-box">
                    <h3>Complaint id : {props.comp_id}</h3>
                    <h3>Description : {props.desc}</h3>
                </div>
                <div className="middle-comp-box">
                    <h3>Documents : </h3>
                    <Link to={props.link} ><u>proofs</u></Link>
                </div>
                <div className="right-comp-box">
                    <button className='accept'>Accept</button>
                    <button className='reject'>Reject</button>
                </div>
            </div>
        </>
    );
}

export default Cybercomp;