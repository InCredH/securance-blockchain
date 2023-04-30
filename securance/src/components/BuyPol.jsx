import React, { useEffect , useState} from "react";
import Home from "./Home";
import { useNavigate } from "react-router";
import Slider from "./Slider";
import {ethers} from "ethers";

function BuyPol({contractState}){

    const [fullData, setFullData] = useState({});
    
    const buyPolicy = async () => {
        const {contract} = contractState;
        var claimAmountWanted = (fullData.claim*0.0000064).toFixed(5);
        
        var premium = (fullData.premium*0.0000064).toFixed(5);
        
        const premium_in_wei = ethers.utils.parseEther(premium.toString());
        const claim_in_wei = ethers.utils.parseEther(claimAmountWanted.toString());
        const value = {value: ethers.utils.parseEther(premium.toString())};
        
        console.log(premium_in_wei,claim_in_wei);
        try{
            const transaction = await contract.buyPolicy(claim_in_wei,premium_in_wei,value);
            await transaction.wait();
        }
        catch(e){
            console.log(e);
        }
        console.log("Transaction is done");
    }

    // if (typeof BigInt === 'undefined') {
    //     // Polyfill for BigInt
    //     require('bigint-polyfill');
    //   }

    // const buyPolicy = async () => {
    //     const {contract} = contractState;
    //     var claimAmountWanted = BigInt((fullData.claim * 0.0000064 * 1e9).toString());
    //     var premium = BigInt((fullData.premium * 0.0000064 * 1e9).toString());
    
    //     console.log(claimAmountWanted.toString(), premium.toString());
    
    //     const value = {value: ethers.utils.parseEther(premium.toString())};
            
    //     const transaction = await contract.buyPolicy(claimAmountWanted, premium, value);
    //     await transaction.wait();
    //     console.log("Transaction is done");
    // }
    
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("formData");

        if (!user) {
            alert("Please log in to view this page.");
            navigate("/login");
        }
    }, []);
    const [sliderValue, setSliderValue] = useState(10000);

    const handleSliderChange = (claim) => {
        setSliderValue(claim);
        console.log(claim);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { address, aadhar, bank } = e.target.elements;
        const data = {
            address: address.value,
            aadhar: aadhar.value,
            bank: bank.value,
            claim:sliderValue*1,
            premium:sliderValue*0.004167,
        };
        console.log(data);
        setFullData(data);
    }

    useEffect(()=>{
        buyPolicy();
    },[fullData])

    return(
        <>
            <Home/>
            <div className="buypol">

                <div className="buypol-blk">
                    <h1>Buy Policy </h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="address">Home Address:</label>
                        <input type="text" id="address" name="address" required />

                        <label htmlFor="aadhar">Aadhar Card Number:</label>
                        <input type="text" id="aadhar" name="aadhar" required />

                        <label htmlFor="bank">Bank Account Details:</label>
                        <input type="text" id="bank" name="bank" required></input>
                        <Slider onSliderChange={handleSliderChange} />
                        <button type="submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        </>
    );
}   

export default BuyPol;