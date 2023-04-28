import React from "react";
import '../css/Policy.css';
import policy from '../images/Policy.png'
function Policy_head(){
    return (
        <div className="policy-head">
            <div className="ph-hlf1">
                <div className="pol-name">
                    <div className="pol-name-img">
                        <img src={policy} style={{width: '130px', height: '150px', marginTop: '30px', marginLeft: '15px'}} />
                    </div>
                    <div className="pol-name-pol">
                        <h1><b>Policy Name :</b> Phishing Attack</h1>
                    </div>
                </div>
            </div>
            <div className="ph-hlf2">
                <p>A phishing attack policy is a crucial component of an organization's cybersecurity strategy. It provides guidelines for employees on how to identify and respond to phishing attacks. By implementing such policies, organizations can reduce the risk of data breaches, financial losses, and damage to their reputation. These policies typically include procedures for reporting and investigating suspected phishing attacks and communicating with stakeholders about their impact. Overall, a well-designed phishing attack policy can help to protect an organization's assets and preserve its integrity.</p>
            </div>
        </div>
    );
}

export default Policy_head;