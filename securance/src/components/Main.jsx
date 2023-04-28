import React from "react";
import '../css/App.css';
import img5 from '../images/pic5.svg'
import Home from "./Home";
import Footer from "./Footer";
function Main(){
    return (
        <>
        <Home />
        <div className="container"> 
        <main className='bkg-img' />
        <div className='why-sec'>
        <div className='why-sec-head'> 
            <hr /><h1>Why <b>Securance?</b></h1><hr />
        </div>
            <div className='why-sec-para'>
            <div className='sec-divider'>
                <p className='home-para'><b>Securance</b> is an insurance service provider that offers protection against cyberattacks, including phishing attacks. Phishing is a type of cyberattack that involves luring individuals into providing sensitive information, such as passwords, credit card details, or other personal data. This is usually done by impersonating a trusted entity, such as a bank, a government agency, or a well-known brand, through email, text messages, or social media.</p>
                <p className='home-para'>Securance's insurance policy against phishing attacks is designed to provide financial protection to businesses and individuals who may fall victim to these types of attacks. The policy covers the costs associated with responding to the attack, including legal fees, forensic investigations, and data recovery. Additionally, it may also provide reimbursement for any financial losses resulting from the attack, such as stolen funds or lost business revenue. </p>
            </div>
            <div className='why-sec-img'>
                <img src={img5} alt="A beautiful landscape" />
            </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default Main;