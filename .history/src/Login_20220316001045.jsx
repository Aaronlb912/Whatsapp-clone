import React from "react";
import "./login.css";

function Login() {
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

        <Button type="submit" onClick={signIn}>
            
        </Button>
      </div>
    </div>
  );
}

export default Login;
