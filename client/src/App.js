import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return (
    <div>
    <Router>
          <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/home" element={<Home />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
