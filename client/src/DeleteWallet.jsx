import walletdetails from "./data/walletdetails";
import {useState, useEffect} from 'react'


const DeleteWallet=()=>{
    const [num,setNum]=useState(false)
    const [mod,setMod]=useState(0)
    const [wallets,setWallets]=useState();
    useEffect(()=>{
        fetch("/wallets/userid", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setWallets(data)
    })},[mod])

   

    const handleConfirmDelete=(id)=>{
        //input fetch to backend here
        fetch(`/${id}`,{method:"delete"})
        .then(setMod(mod+1))
        .then(setNum(false));
        alert("Account successfully deleted")
    }

    const handleDelete=()=>{
        console.log("click");
        setNum(true);
    }
    return(<>
    <p>Hello user 2, here are your wallets</p>
    {walletdetails.filter((x)=>x.user_id===2).map((item)=>{
        return <p>{item.id}: {item.name} {num===false?<button onClick={handleDelete}>Delete Account</button>:<button onClick={handleConfirmDelete}>Confirm Delete</button>}</p>
    })}
    
    
    </>)
}

export default DeleteWallet;