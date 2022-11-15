import React from "react";
import { LoginForm } from "./LoginForm";
import { loginDatabase } from "..rest/LoginDatabase.js";

export class Login extends React.Component {
  state = {
    loginInfo: [],
  };

  validateLogin = async (currentLoginInfo) => {
    console.log(
      "Attempting to check that email and password submitted is found within the user database."
    );
    const loginInfo = await loginDatabase.get(currentLoginInfo);
    this.setState({ loginInfo });
  };

  render() {
    return (
      <div className="login">
        <div className="getLoginForm">
          <LoginForm loginAttempt={this.validateLogin} />
        </div>
      </div>
    );
  }
}
