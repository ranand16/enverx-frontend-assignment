import React from 'react'

const ExpensesList = ({ 
    expenselist=[],
    expenselistLoading,
    addingExpense,
    removingExpense, 
    addExpenseRequestAction,
    removeExpenseRequestAction
 }) => {
    return (<div><div className="">
            <button onClick={()=> {
                console.log("Hello")
                addExpenseRequestAction({
                    "id":"124wefwef134",
                    "value": 125,
                    "title": "Haircut",
                    "balance": 515
                })
            }}>Click me to update the redux state</button>
            {expenselist.map((ex)=>{
                return <div key={ex["id"]}>{ex["expense"]}</div>
            })}
        </div>
    </div>);
}

export default ExpensesList;