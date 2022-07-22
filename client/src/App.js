import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TransactionTable from "./TransactionTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/exchangerate" element={<ExchangeRateDisplay/>}/>
      <Route path="/transactiontable" element={<TransactionTable/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
