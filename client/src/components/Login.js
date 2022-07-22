import { useNavigate  } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

   
      function validation() {
        return user.length > 0 && password.length > 0;
      }
      const handleLoginSubmit = (e) => {
            navigate("/home");
      }
      const handleSignUp= () => {
        navigate("/signup");
  }
      return (
        <div className="Login">
          <h1>Welcome to MarketPlace Login!</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                type="username"
                value={user}
                onChange={(e) => setUser(user)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(password)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validation()}>
              Login
            </Button>
            <Button block size="lg" type="submit" onClick={handleSignUp}>
              Signup
            </Button>
          </Form>
        </div>
      );
}