import "./App.css";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TransactionTable from "./TransactionTable";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import WalletPage from "./WalletPage";
function App() {
  return (
    <div>
    <Router>
    <NavBar/>
          <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/home" element={<Home />} />
           <Route exact path="/signup" element={<Signup />} />
           <Route path="/exchangerate" element={<ExchangeRateDisplay/>}/>
            <Route path="/transactiontable" element={<TransactionTable/>}/>
            <Route path="/viewwallets" element={<WalletPage/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;
