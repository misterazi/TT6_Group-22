import React, { useState, useEffect } from "react";
import Axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    console.log(name);
    console.log(password);
    console.log(username);

    Axios.post("https://nad-flask-template.herokuapp.com/auth/register", {
      name: name,
      password: password,
      username: username,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <label>Name</label>
      <input
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <label>Password</label>
      <input
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <label>Username</label>
      <input
        id="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br></br>
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default Signup;
