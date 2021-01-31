import { createContext , useReducer} from 'react';
import AppReducer from './AppReducer'
const initialState = {
    transactions:[

    ]
}



export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    const balance = state.transactions.map(transaction=>transaction.amount)
    const total = balance.reduce(function(acc, val) { return acc + val; }, 0)
    // const income = balance.filter(function(a) {a>=0} )
    const income = balance.filter(function (a) { return a >= 0; })
    const expense = balance.filter(function (a) { return a < 0; })
    const totalIncome = income.reduce(function(acc, val) { return acc + val; }, 0)
    const totalExpense = expense.reduce(function(acc, val){ return acc+val;},0)
    return(<GlobalContext.Provider value = {
        {   
            transactions:state.transactions,
            addTransaction,
            deleteTransaction,
            total: total,
            totalIncome,
            totalExpense
        }
    }>{children}

    </GlobalContext.Provider>)
}
