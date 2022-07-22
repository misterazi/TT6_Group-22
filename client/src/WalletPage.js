import "./App.css";
import React, { useState, useEffect } from "react";
import { walletData } from "./data/walletData";

const WalletPage = () => {
  const [walletList, setWalletList] = useState(walletData);

  return (
    <div className="Dashboard">
      <h2>Wallet Dashboard</h2>
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
};

export default WalletPage;
