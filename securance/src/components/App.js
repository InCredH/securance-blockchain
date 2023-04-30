import abi from '../contract/newCyberInsurance.json';
import {ethers} from "ethers";
import { Web3Provider } from "@ethersproject/providers";
// const { CONTRACT_ADDRESS } = require('./deploy.js');
import React from "react";
import Main from "./Main";
import Dashboard from "./Dasboard"
import Login from "./Login";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import BuyPol from "./BuyPol";
import Policy from "./Policy";
import AbtPol from "./Abt_pol";
import FormDataContext from './ContextData';
import { useState, useEffect } from 'react';
import CyberHome from "./CyberHome";
import SecAdmin from './SecAdmin';
import CyberAdmin from './CyberAdmin';

function App() {
  const [contractState, setcontractState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [formData, setFormData] = useState({
    fName: "Ayush",
  });
  
  const state = {
    formData: formData,
    setFormData: setFormData
  }

  useEffect(() => {
    const ConnectWallet = async () => {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new Web3Provider(ethereum);
          const balance = await provider.getBalance(contractAddress);
          console.log(`Balance of ${contractAddress}: ${balance/1e9}.toString() ether`);
          
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setcontractState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    }
    ConnectWallet();
  }, [])

  console.log(contractState);

  return (
    <div>
      <FormDataContext.Provider value={state}>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/policy" element={<Policy />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard contractState={contractState}/>}></Route>
          <Route exact path="/abtpol" element={<AbtPol />}></Route>
          <Route exact path="/cyber" element={<CyberHome contractState={contractState}/>}></Route>
          <Route exact path = "/secadmin" element = {<SecAdmin />} />
          <Route exact path = "/Cyberadmin" element = {<CyberAdmin />} />
          <Route exact path="/buypol" element={<BuyPol contractState={contractState}/>}></Route>
        </Routes>
      </FormDataContext.Provider>
    </div>
  );
}

export default App;
