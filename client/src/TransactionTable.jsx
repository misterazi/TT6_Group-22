import transactiondata from "./data/transactiondata";
import {useState, useEffect} from 'react';
import walletdetails from "./data/walletdetails";


//to only display transactions related to wallet_id tagged to user
const WalletSelectForm=({choice,setChoice})=>{
    // const [choice,setChoice]=useState("");
    const [wallets,setWallets]=useState();
    const [mod,setMod]=useState(0);
    useEffect(()=>{
        fetch("/wallets/userid", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setWallets(data)
    })},[mod])

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("clicked")
        // console.log(choice);
    }

    return(
        <>
        <h1>Wallet Description</h1>
        <ul>
            {walletdetails.filter((x)=>x.user_id===2).map((item)=><p>{item.id}, {item.name}</p>)}

        </ul>
        <form onSubmit={handleSubmit}>
            <select id="wallet" name="wallet" value={choice} onChange={(event)=>{setChoice(event.target.value); setMod(mod+1)}
                        
                    }>
                {walletdetails.filter((x)=>x.user_id===2).map((item)=>{
                    return <option>{item.id}</option>
                })}
            </select>
        <button>Choose Wallet to View</button>
        </form>
        </>
    )
}


const TransactionTable = () => {
    const [choice, setChoice]=useState();
  return (
    
      <>
      <WalletSelectForm choice={choice} setChoice={setChoice}/>
      <p>User Selected: Wallet {choice}</p>
      {transactiondata.filter((x)=>{return x.wallet_id===parseInt(choice);}).map((item) => {
        return <div>
          {item.wallet_id}, {item.debit_id},{item.debit_currency},
          {item.debit_amount},{item.credit_id},{item.credit_currency},{item.credit_amount}
          ,{item.description},{item.created_at},{item.created_by},
          {item.updated_at},{item.updated_by}
        </div>;
      })}
    </>
  );
};

export default TransactionTable;


