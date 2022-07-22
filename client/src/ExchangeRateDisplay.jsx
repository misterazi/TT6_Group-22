import {useEffect, useState} from 'react'
import currencydata from './data/currencydata.js'


const ExchangeRateDisplay=()=>{
    console.log(currencydata);
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