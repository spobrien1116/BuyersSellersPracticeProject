import React from "react";
import { LoginForm } from "./LoginForm";
import { loginDatabase } from "../rest/LoginDatabase.js";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginInfo: [],
    };
  }

  validateLogin = async (currentLoginInfo) => {
    console.log(
      "Attempting to check that email and password submitted is found within the user database."
    );
    const loginInfo = await loginDatabase.get(currentLoginInfo);
    if (loginInfo.email !== "noMatch") {
      this.setState({ loginInfo: currentLoginInfo });
    } else {
      console.log("This does not match any users in the system.");
    }
  };

  render() {
    return (
      <div className="login">
        <div className="getLoginForm">
          <LoginForm loginAttempt={this.validateLogin} />
        </div>
        <div className="testDisplayInfo">
          <h3>Login Email</h3>
          {this.state.loginInfo.email}
          <h3>Login Password</h3>
          {this.state.loginInfo.password}
        </div>
      </div>
    );
  }
}
