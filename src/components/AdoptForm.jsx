import React, { useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import emailjs from "emailjs-com";

const Adopt =()  =>{

  
  
  const ref = collection(firestore, "Adoption Forms");

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aType, setaType] = useState("");
  const [message, setMessage] = useState("");
  

  const sendEmail = () =>{

    //e.preventDefault();

    const serviceID = "service_en3cgli";
    const templateID = "template_nwz56yj";
    const publicKey = "JAE7I6Atu5_0BoeBj";

    const tempParam = {
      form_type:"Adoption Form",
      from_name: name,
      message: name + " would like to adopt a " + document.getElementById('inputType').value + " .Message: " + message,
    };


    emailjs.send(serviceID,templateID,tempParam,publicKey)
    .then((response)=>{
      alert("Email sent successfully",response.text);
      setName('');
      setEmail('');
      setaType('');
      setMessage('');
    })
    .catch((error)=>{
      alert(error.text);
    });
  };

  const handleSave = () => {

    let data = {
      Adoptee: document.getElementById("inputName").value,
      Address: document.getElementById("inputAddress").value,
      Preference: document.getElementById("inputPref").value,
      FirstTimeOwner: document.getElementById("inputPrevOwner").value,
      PostalCode: document.getElementById("inputPostalCode").value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  const runBothFunctions = (e) => {
    e.preventDefault();
    handleSave();
    sendEmail();
  }

  return (
    <div className="form col-md-6">
      <h1 className="adoptionForm"> Adoption Form </h1>
      <form ref={form} className="row g-3" onSubmit={runBothFunctions}>
        <div className="col-4">
          <label htmlFor="inputName" className="form-label">
            Name[As in NRIC]
          </label>
          <input type="text" className="form-control" id="inputName" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="col-4">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-4">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPref" className="form-label">
            Name Of Pet To Be Adopted:
          </label>
          <input type="text" className="form-control" id="inputPref" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputType" className="form-label">
            Animal Type
          </label>
          <select id="inputType" className="form-select" value={aType} onChange={(e) => setaType(e.target.value)}>
            <option value="Cat"> Cat </option> <option value="Dog"> Dog </option>
            <option value="Rodent"> Rodent </option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPrevOwner" className="form-label">
            First Pet ?
          </label>
          <select id="inputPrevOwner" className="form-select">
            <option selected> Yes </option> <option> No </option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPostalCode" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPostalCode"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adopt;
