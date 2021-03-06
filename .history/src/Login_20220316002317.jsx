import React from "react";
import "./login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = () => {
    signInWithPopup(provider).then(result => 
        console.log(result)
        )

  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
