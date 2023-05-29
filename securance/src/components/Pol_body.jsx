import React from "react";
import "../css/Policy.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Pol_body(){
    const [claimAmount, setClaimAmount] = useState('');

    function handleClaimAmountChange(value) {
        setClaimAmount(value);
    }

    const navigate = useNavigate()
    
    function handleClick() {
        navigate('/buypol')   
    }
    function handleCalculate() {
        const claimValue = parseInt(claimAmount);
        const claimAmountResult = claimValue * 0.05;
        alert(`Calculated Premium Amount: Rs${claimAmountResult}`);
      }

    return(
        <div>
            <div className="box"></div>
            <div className="pol-body">
                <div className="pol-terms1">
                    <div className="pol-text">
                        <h1>Terms & Conditions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p><a href="/abtpol"><u>learn more..</u></a></p>
                    </div>
                    <div className="pol-input">
                        <label htmlFor="claim-amount-input">Claim Amount: </label>
                        <p>Calculate the yearly Premium to be paid : </p>
                        <input 
                        id="claim-amount-input" 
                        name="claim-amount" 
                        type="number"
                        placeholder="Enter claim amount" 
                        onChange={(e) => handleClaimAmountChange(e.target.value)}
                        />  
                        <button onClick={handleCalculate}>Calculate</button>
                    </div>
                </div>
                <div className="pol-terms2">
                <div className="pol-text">
                        <h1>License</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p><a href="/abtpol"><u>learn more..</u></a></p>
                    </div>
                </div>
            </div>
            <div className="buy-pol">
                <button onClick={handleClick}>Buy Policy</button>
            </div>
        </div>
    );
}

export default Pol_body;