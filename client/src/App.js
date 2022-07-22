import "./App.css";
import { useState } from "react";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TransactionTable from "./TransactionTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import WalletPage from "./WalletPage";
import WalletDataPage from "./WalletDataPage";
import DeleteWallet from "./DeleteWallet";
import CreateTransaction from "./CreateTransaction";

function App() {
  const [userId, setUserId] = useState({ access: "", id: 0 });

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Login userId={userId} setUserId={setUserId} />}
          />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/exchangerate" element={<ExchangeRateDisplay />} />
          <Route
            path="/transactiontable"
            element={<TransactionTable userId={userId} />}
          />
          <Route path="/viewwallets" element={<WalletPage />} />
          <Route path="/viewwalletData" element={<WalletDataPage />} />
          <Route path="/deletewallet" element={<DeleteWallet />} />
          <Route path="/createTransaction" element={<CreateTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
