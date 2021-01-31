import React , {useContext} from 'react'
import { GlobalContext } from '../services/Context'
import './components.css'

export const IncomeExpense = () => {
    const {totalIncome , totalExpense} = useContext(GlobalContext)
    return (
        <div className = 'incomeexpense'>
            <div className = 'income ie'>
                <h3 className = 'incomeheading'>INCOME</h3>
                <h2 className = 'incomenumber'>${totalIncome}</h2>
            </div>
            <div className ='expense ie' >
                <h3 className = 'expenseheading'>EXPENSE</h3>
                <h2 className = 'expensenumber'>${totalExpense}</h2>
            
            </div>
        </div>
    )
}
