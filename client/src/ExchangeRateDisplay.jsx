import {useEffect, useState} from 'react'
import currencydata from './data/currencydata.js'


const ExchangeRateDisplay=()=>{
const [exchangerate,setExchangerate]=useState();
    useEffect(()=>{
        fetch("https://nad-flask-template.herokuapp.com/exchange/all", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExchangerate(data)
    })},[])
    // console.log(exchangerate);
    return (<>
    <h1>Exchange Rate from SGD to foreign currency</h1>
    {exchangerate?.map((item)=>{
        return <div>
            <p>{item.base_currency} to {item.exchange_currency}</p>
            <p>Exchange Rate: {item.rate}</p>
            <br></br>
        </div>
    })}
    
    </>)
}

export default ExchangeRateDisplay;