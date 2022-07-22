import React, { useState } from "react";

const currData = [
  {
    CAD: 0.9255,
    CNH: 4.7868,
    EUR: 0.7086,
    HKD: 5.583,
    JPY: 97.5303,
    NZD: 1.1612,
    NOK: 7.2912,
    GBP: 4.5974,
    SEK: 7.5168,
    THB: 25.7275,
    USD: 0.7113,
  },
];
const CreateTransaction = () => {
  const [currencyData, setCurrData] = useState(currData);
  const [value, setValue] = useState("CAD");
  const [debitAmount, setDebitAmount] = useState();
  const [creditAmount, setCreditAmount] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const handleAmountChange = (event) => {
    setDebitAmount(event.target.value);
    console.log(currencyData[value]);
    setCreditAmount(event.target.value);
  };
  return (
    <div>
      <h1>CreateTransaction</h1>
      <div className="transactionInput">
        <label>Debit </label>
        <input
          id="debitAmount"
          name="debitAmount"
          type="number"
          onChange={handleAmountChange}
        ></input>
        <label> SGD</label>
        <label>Credit </label>
        <input
          id="creditAmount"
          name="creditAmount"
          type="number"
          value={creditAmount}
        ></input>
        <select value={value} onChange={handleChange}>
          <option value="CAD">CAD</option>
          <option value="CNH">CNH</option>
          <option value="EUR">EUR</option>
          <option value="HKD">HKD</option>
          <option value="JPY">JPY</option>
          <option value="NZD">NZD</option>
          <option value="NOK">NOK</option>
          <option value="SEK">SEK</option>
          <option value="THB">THB</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
};

export default CreateTransaction;
