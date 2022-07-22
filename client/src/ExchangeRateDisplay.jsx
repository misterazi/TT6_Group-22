import {useEffect, useState} from 'react'
import currencydata from '../data/currencydata.js'


const ExchangeRateDisplay=()=>{
    console.log(data);
    return (<>
    <h1>Exchange Rate from SGD to foreign currency</h1>
    {currencydata.map((item)=>{
        return <div>
            <p>{item.base_currency} to {item.exchange_currency}</p>
            <br></br>
            <p>Exchange Rate: {item.rate}</p>
        </div>
    })}
    
    </>)
}

export default ExchangeRateDisplay;