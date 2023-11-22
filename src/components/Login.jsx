import React from "react";
import { useState } from "react";
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const signIn = (e) => {
      //Actual function to sign in
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        console.log(userCredential);
        alert("Welcome to Pet Heaven!");

      }).catch((error) =>{
        console.log(error);
      })
  }
  return (
    <form className="loginCenter" onSubmit={signIn}>
      <h3 className="h3center">🐾 LOGIN 🐾</h3>
      <p className="pcenter">Please enter your login details</p>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-describedby="emailHelp"
          aria-label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="Password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
      </div>
      <br />
      <div className="btndiv btnCenter">
        <input
          className="btn button btn-primary"
          defaultValue="Login"
          id="loginBtn"
          type="submit"
        />
      </div>
      <div className="askreg">
        <span>
          Looking to adopt or release? <a href="./Register">Join us now!</a>
        </span>
      </div>
    </form>
  );
};

export default Login;
