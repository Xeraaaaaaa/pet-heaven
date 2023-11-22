import { firestore } from "../firebase";
import {addDoc,collection} from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {auth} from "../firebase";

function Register() {

    const ref = collection(firestore,"Registered Users")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var h5display = document.getElementById("h5display");

    const register = () =>{
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
            alert("Thank you for registering with Pet Heaven!");
            document.location.href = "./Home2";
            h5display.style.display = "none";
        })
        .catch((error) =>{
            console.log(error);
        })
    };
    
    const handleSave = async () => {
        
        //console.log(document.getElementById("regUser").value);
        //console.log(document.getElementById("regEmail").value);
        //console.log(document.getElementById("regPass").value);

        let data = {
            userName: document.getElementById("regUser").value,
            userEmail: document.getElementById("regEmail").value,
            userPassword: document.getElementById("regPass").value
            
        }

        try{
            addDoc(ref,data);
        }catch(e){
           console.log(e); 
        }
    };

    const runBothFunctions = (e) => {
        e.preventDefault();
        register();
        handleSave();
        
      };

  return (
    <form className="centerReg" onSubmit={runBothFunctions}>

      <h5 className="h5center">🐾 REGISTRATION FORM 🐾</h5>
      <p></p>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="regUser"  required />
      </div>
      <div className="form-group">
        <label htmlFor="regEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="regEmail"
          
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="regPass">Password</label>
        <input
          type="password"
          className="form-control"
          id="regPass"
          
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="regAddr"  required />
      </div>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="regCity" required/>
        </div>
        <div className="form-group">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="regZip" required/>
        </div>
      </div>
      <input className="btn btn-primary" defaultValue="Register" type="submit" id="regBtn"/>
    </form>
  );
}

export default Register;
