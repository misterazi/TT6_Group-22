import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      signupClicked: false,
      loginClicked: false,
    };

    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.onInputchange = this.onInputchange.bind(this);
  }

  async onLogin(e) {
    e.preventDefault();
    if (this.state.username == "" || this.state.password == "") {
      alert("Username and password cannot be blank!");
    } else {
      // add axios
    }
  }

  onSignup() {
    this.setState({
      signupClicked: true,
    });
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.state.signupClicked && <Navigate to="/signup" replace={true} />}
        {this.state.loginClicked && (
          <Navigate to="/exchangerate" replace={true} />
        )}
        <h1>Login</h1>
        <div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              size="30"
              onChange={this.onInputchange}
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              id="password"
              size="30"
              onChange={this.onInputchange}
              value={this.state.password}
            />
          </div>
          <button onClick={this.onLogin}>Login</button>
          <button onClick={this.onSignup}>Sign Up</button>
        </div>
      </div>
    );
  }
}
export default Login;
