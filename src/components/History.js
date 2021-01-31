import React , {useContext} from 'react'
import {Transactions} from './Transactions'
import './components.css'
import {GlobalContext} from '../services/Context'
export const History = () => {
    const {transactions} = useContext(GlobalContext)
    return (

        <div className = 'history'>
            <h3 className = 'historyheading'>History</h3>
            <ul className = 'list'>
                {transactions.map(transactions => (<Transactions key = {transactions.id} transactions = {transactions}></Transactions>))}
            </ul>  
        </div>
    
    )
}
