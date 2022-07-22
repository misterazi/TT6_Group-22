import "./App.css";
import React, { useState, useEffect } from "react";
import { data } from "./data";
import Axios from "axios";

function App() {
  const [walletList, setWalletList] = useState(data);

  return (
    <div className="Dashboard">
      <h2>Dashboard</h2>
      {walletList
        .filter((wallet) => {
          return wallet.user_id === 1;
        })
        .map((wallet) => {
          return (
            <div className="Wallet">
              <label>UserID: {wallet.user_id}</label>
              <label>WalletID: {wallet.id}</label>
              <label>{wallet.name}</label>
            </div>
          );
        })}
    </div>
  );
}

export default App;
