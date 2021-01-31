import React , {useContext} from 'react'
import {GlobalContext} from '../services/Context'
export const Transactions = ({transactions}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div>
            <li className = 'items'>{transactions.text} <span>${transactions.amount} <button onClick = {()=>deleteTransaction(transactions.id)} className = 'x-button'> x</button></span></li>
        </div>
    )
}
