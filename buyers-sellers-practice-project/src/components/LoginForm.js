import React, { useState } from "react";

export const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setEmail("");
      setPassword("");
    } else {
      console.log(
        "The email or password submitted was invalid. Please try again with a valid email and password."
      );
    }
  };

  return (
    <div>
      <form className="loginForm" onSubmit={onSubmit}>
        <label htmlFor="place" className="form-control loginFormLabel">
          Enter your email.
        </label>
        <input
          type="email"
          className="form-control loginFormInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <label htmlFor="place" className="form-control loginFormLabel">
          Enter your password.
        </label>
        <input
          type="password"
          className="form-control loginFormInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button className="btn btn-primary form-control" type="submit">
          Submit Credentials
        </button>
      </form>
    </div>
  );
};
