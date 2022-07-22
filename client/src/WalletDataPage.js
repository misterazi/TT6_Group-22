import React, { useState, useEffect } from "react";
import { walletCurrencyData } from "./data/walletCurrencyData";
import "./App.css";

const WalletDataPage = () => {
  const [walletDataList, setDatalist] = useState(walletCurrencyData);
  const [selectedWallet, setSelectedWallet] = useState("");

  const uniqueWallet = [
    ...new Set(walletDataList.map((item) => item.wallet_id)),
  ];

  console.log(uniqueWallet);
  return (
    <div>
      <h1>Wallet's Currency Data</h1>
      <div className="dropDownArea">
        <select value="selectedWallet">
          {uniqueWallet.map((wallet) => {
            return (
              <option key={wallet} value={wallet}>
                Wallet {wallet}
              </option>
            );
          })}
        </select>
        <label>Selected: {selectedWallet}</label>
      </div>

      {walletDataList
        .filter((wallet) => {
          return wallet.wallet_id === 1;
        })
        .map((data, idx) => {
          return (
            <div key="idx">
              <label>{data.wallet_id}</label> <label>{data.currency}</label>{" "}
              <label>{data.amount}</label>{" "}
            </div>
          );
        })}
    </div>
  );
};

export default WalletDataPage;
