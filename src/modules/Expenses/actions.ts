import { createAction } from "redux-actions";
import { REQUEST, SUCCESS } from "../../utils.js";

export const ADDEXPENSE = "ADDEXPENSE";
export const REMOVEEXPENSE = "REMOVEEXPENSE";
export const GETEXPENSES = "ADDEXPENSE";

export const addExpenseRequestAction = createAction(REQUEST(ADDEXPENSE));
export const addExpenseSuccessAction = createAction(SUCCESS(ADDEXPENSE));

export const removeExpenseRequestAction = createAction(REQUEST(REMOVEEXPENSE));
export const removeExpenseSuccessAction = createAction(SUCCESS(REMOVEEXPENSE));

// export const fetchExpensesRequestAction = createAction(REQUEST(GETEXPENSES));
// export const fetchExpensesSuccessAction = createAction(SUCCESS(GETEXPENSES));
// export const fetchExpensesFailureAction = createAction(FAILURE(GETEXPENSES));