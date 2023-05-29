import abi from '../contract/newCyberInsurance.json';
import {ethers} from "ethers";
import { Web3Provider } from "@ethersproject/providers";

import React, { useState, useEffect, useContext } from "react";
import "../css/Login.css";
import FormDataContext from "./ContextData";
import Web3 from "web3";
import { useNavigate } from "react-router";
import Home from "./Home";
import Footer from "./Footer";
function Login() {
  const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { setFormData } = useContext(FormDataContext);
  const [contractState, setcontractState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  useEffect(() => {
    const formDataString = localStorage.getItem("formData");
    if (formDataString) {
      const data = JSON.parse(formDataString);
      setFormData(data);
    }
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Connect your Metamask account!");
      return;
    }
    const { fname, lname, phone } = e.target.elements;
    const data = {
      fname: fname.value,
      lname: lname.value,
      phone: phone.value,
      metamask_id: account,
    };
    setFormData(data);
    localStorage.setItem("formData", JSON.stringify(data));    
    setTimeout(function () {
      localStorage.removeItem("formData");
    }, 20 * 60 * 1000);
    navigate("/");
    window.location.reload();
  };

  async function connectToMetaMask() {
    
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask to use this dApp!");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected to Metamask");
      setIsConnected(true);
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
    } else {
      console.log("Web3 is not injected");
    }
  }, []);

  return (
    <>
      <Home />
    
    <div className="login-pg">
      <h1 className="h1">Signup / Login</h1>
      <div className="login-blk">
        <form className="log-box" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name : </label>
          <input
            id="fname"
            name="fname"
            type="text"
            placeholder="Enter first name"
            required
          />
          <br />
          <label htmlFor="last-name">Last Name : </label>
          <input
            id="lname"
            name="lname"
            type="text"
            placeholder="Enter last name"
            required
          />
          <br />
          <label htmlFor="phone-number">Phone Number : </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            required
          />
          <br />
          <div className="log-sub">
            <button id="connect-button"
            className="connect-button"
            onClick={connectToMetaMask}
            type="submit-log">submit</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}
export default Login;
