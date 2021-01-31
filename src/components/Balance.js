import React , {useContext} from 'react'
import {GlobalContext} from '../services/Context'
import './components.css'

export const Balance = () => {
    const {total} = useContext(GlobalContext)
    return (
        <div className = 'balance'>
            <h3 className = 'balance-head'>Balance:-</h3>
            <h2>${total}</h2>
        </div>
    )
}
