import walletdetails from "./data/walletdetails";
import {useState, useEffect} from 'react'


const DeleteWallet=({userId})=>{
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
        console.log(id);
        fetch(`https://nad-flask-template.herokuapp.com/wallet/${id}`,{method:"delete", headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userId.access}`,
          },body: JSON.stringify({"id":id})})
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
        return <p>{item.id}: {item.name} {num===false?<button onClick={()=>handleDelete(item.id)}>Delete Account</button>:<button onClick={()=>handleConfirmDelete(item.id)}>Confirm Delete</button>}</p>
    })}
    
    
    </>)
}

export default DeleteWallet;