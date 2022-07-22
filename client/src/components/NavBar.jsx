import {useNavigate} from 'react-router-dom'

const NavBar=()=>{
    const navigate=useNavigate();
    return (<>
    <nav>
        <button onClick={()=>{navigate('/')}}>Login</button>
        <button onClick={()=>{navigate('/exchangerate')}}>View Exchange Rates</button>
        <button onClick={()=>{navigate('/transactiontable')}}>View past transactions</button>
        <button onClick={()=>{navigate('/viewwallets')}}>View User's Wallets</button>
        <button onClick={()=>{navigate('/createTransaction')}}>Create Transaction</button>
        <button onClick={()=>{navigate('/viewwalletData')}}>View wallet's data</button>
        <button onClick={()=>{navigate('/deletewallet')}}>Close Wallet</button>
    </nav>
    </>)
}

export default NavBar;