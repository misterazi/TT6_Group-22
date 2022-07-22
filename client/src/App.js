import "./App.css";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TransactionTable from "./TransactionTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WalletPage from "./WalletPage";
import WalletDataPage from "./WalletDataPage";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/exchangerate" element={<ExchangeRateDisplay />} />
          <Route path="/transactiontable" element={<TransactionTable />} />
          <Route path="/viewwallets" element={<WalletPage />} />
          <Route path="/viewwalletData" element={<WalletDataPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
