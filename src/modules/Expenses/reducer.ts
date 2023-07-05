import { FAILURE, REQUEST, SUCCESS } from "../../utils.js"
import { ADDEXPENSE, GETEXPENSES, REMOVEEXPENSE } from "./actions.js"


const initialState = {
    expenselist : [],
    expenselistLoading : undefined,
    expenselistLoadingError : undefined,
    addingExpense : undefined,
    addingExpenseError : undefined,
    removingExpense : undefined,
    removingExpenseError : undefined,
}
 
export default (
        state = initialState, 
        action
    ) => {
    switch(action.type) {
        case SUCCESS(ADDEXPENSE):
        const newExpenseList = [...state.expenselist, {...action.payload}]
        console.log(action.payload)
        return {
            ...state,
            expenselist: newExpenseList
        }
        case SUCCESS(REMOVEEXPENSE): 
        const newExList = [...state.expenseList].filter((expe)=> expe.id !== action.payload)
        return {
            ...state,
            expenseList: [...newExList]
        }
        case REQUEST(ADDEXPENSE):
        console.log(action.payload)
        return {
            ...state,
            addingExpense: "Adding expense list."
        }
        case REQUEST(REMOVEEXPENSE): 
        return {
            ...state,
            removingExpense: "Removing this expense."
        }
        // case REQUEST(GETEXPENSES): 
        // return {
        //     ...state,
        //     expenselistLoading: "Loading your expenses..."
        // }
        
        case FAILURE(ADDEXPENSE):
        return {
            ...state,
            addingExpenseError: "Couldn't add expense. Try again later."
        }
        case FAILURE(REMOVEEXPENSE): 
        return {
            ...state,
            removingExpenseError: "Couldn't remove expense. Try again later."
        }
        // case FAILURE(GETEXPENSES): 
        // return {
        //     ...state,
        //     expenselistLoadingError: "Couldn't get your expenses now. Try again later."
        // }
        default:
            return state
    }
}