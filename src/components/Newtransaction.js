import React from 'react'
import './components.css'
import {useState , useContext} from 'react'
import {GlobalContext} from '../services/Context'

export const Newtransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const[text, setText] = useState('')
    const[amount, setAmount] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        const NewTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount : +amount,
        }
        addTransaction(NewTransaction)
        console.log('jjh')
    }
    return (
        <div>
            <div className= 'new-transaction'>
                <h3>Add New Transaction</h3><hr/>
            <form onSubmit = {onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label><br />
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label><br />
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button  className="btn" >Add transaction</button>
            </form>
            
           
        </div>
        </div>
    )
}
