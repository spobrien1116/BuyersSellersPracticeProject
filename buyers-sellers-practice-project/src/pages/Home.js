import React from "react";
import { Login } from "../components/Login";

function Home() {
  return (
    <>
      <div className="home-intro">
        <h1>WeTradeStuff.com</h1>
        <h4>
          Sign in below to get started, or click create new account to join our
          network.
        </h4>
      </div>
      <Login />
    </>
  );
}

export default Home;
