import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
function App() {
  return (
    <div>
    <Router>
          <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/home" element={<Home />} />
           <Route exact path="/signup" element={<Signup />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
