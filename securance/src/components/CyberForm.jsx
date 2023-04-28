import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ClaimForm() {
  const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("formData");

        if (!user) {
            alert("Please log in to view this page.");
            navigate("/login");
        }
    }, []);
  const [complaint, setComplaint] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { accnum, desc, fname, doc , add, claim} = e.target.elements;
    const data = {
      fname: fname.value,
      accnum: accnum.value,
      desc: desc.value,
      doc: doc.value,
      add: add.value,
      claim: claim.value,
    };
    setComplaint(data);
    console.log(complaint);
    
  };
  
  useEffect(() =>{
    console.log(complaint);
  },[complaint]);

  return (
    <div className="cyber-form">
    <h1>Please fill in the complaint </h1>
    <form onSubmit={handleSubmit}>
      <label>
        Account Number:
        <input type="text" id="accnum"
            name="accnum" required/>
      </label>
      <br />
      <label>
        Description:
        <input type="text" id="desc"
            name="desc" required/>
      </label>
      <br />
      <label>
        Document:
        <input type="file" id="doc"
            name="doc" required/>
      </label>
      <br />
      <label>
        Name:
        <input type="text" id="fname"
            name="fname" required/>
      </label>
      <br />
      <label>
        Address:
        <input type="text" id="add"
            name="add" required/>
      </label>
      <br />
      <label>
        Claim Ask:
        <input type="number" id="claim"
            name="claim" required/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default ClaimForm;
