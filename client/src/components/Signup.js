import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
      confirmpassword: "",
      onSignup: false,
      onBacked: false,
    };

    this.onSignupClicked = this.onSignupClicked.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  async onSignupClicked(e) {
    e.preventDefault();

    if (
      this.state.username == "" ||
      this.state.password == "" ||
      this.state.confirmpassword == ""
    )
      alert("Fields cannot be blank!");
    else {
      if (this.state.password != this.state.confirmpassword) {
        alert("Password do not match!");
      } else {
      }
    }
  }

  onInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.state.onSignup && <Navigate to="/" replace={true} />}
        <h1>Sign Up</h1>
        <div>
          <div>
            <label>Username:</label>
            <input
              size="30"
              onChange={this.onInput}
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
              onChange={this.onInput}
              value={this.state.password}
            />
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              name="confirmpassword"
              type="password"
              id="confirmpassword"
              style={{
                marginLeft: "2%",
                border: "1px solid #000",
              }}
              size="20"
              onChange={this.onInput}
              value={this.state.confirmpassword}
            />
          </div>
          <div>
            <button onClick={this.onSignupClicked}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
