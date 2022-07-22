import {useEffect, useState} from 'react'
import currencydata from './data/currencydata.js'


const ExchangeRateDisplay=()=>{
const [exchangerate,setExchangerate]=useState();
    useEffect(()=>{
        fetch("/exchangerates/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setExchangerate(data)
    })})
    // console.log(currencydata);
    return (<>
    <h1>Exchange Rate from SGD to foreign currency</h1>
    {currencydata.map((item)=>{
        return <div>
            <p>{item.base_currency} to {item.exchange_currency}</p>
            <p>Exchange Rate: {item.rate}</p>
            <br></br>
        </div>
    })}
    
    </>)
}

export default ExchangeRateDisplay;