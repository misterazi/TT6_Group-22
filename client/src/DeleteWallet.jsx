import walletdetails from "./data/walletdetails";
import {useState} from 'react'


const DeleteWallet=()=>{
    const [num,setNum]=useState(false)

    const handleConfirmDelete=()=>{
        //input fetch to backend here
        setNum(false);
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