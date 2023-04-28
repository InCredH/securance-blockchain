import React, { useEffect , useState} from "react";
import Home from "./Home";
import { useNavigate } from "react-router";
import Slider from "./Slider";
import {ethers} from "ethers";

function BuyPol({contractState}){

    const [fullData, setFullData] = useState({});
    
    const buyPolicy = async () => {
        // event.preventDefault();
        const {contract} = contractState;
        var claimAmountWanted = (fullData.claim* 0.0000064).toFixed(5);
        claimAmountWanted*=1e9;
        
        var premium = (fullData.premium * 0.0000064).toFixed(5);
        var passingPremium = premium*1e9;
        
        console.log(claimAmountWanted,premium);

        const value = {value:ethers.utils.parseEther(passingPremium.toString())};
        
        const transaction = await contract.buyPolicy(claimAmountWanted,premium,value);
        await transaction.wait();
        console.log("Transaction is done")
    }
    
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
                    {/* bank account details, aadhar card number, address*/}
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