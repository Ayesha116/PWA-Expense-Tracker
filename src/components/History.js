import React from 'react'
import {Transactions} from './Transactions'

export const History = () => {
    return (

        <div className = 'history'>
            <h3 className = 'historyheading'>History</h3><hr/>
            {/* <ul className = 'list'>
                {transactions.map(transactions => (<Transactions key = {transactions.id} transactions = {transactions}></Transactions>))}
            </ul>   */}
        </div>
    
    )
}
