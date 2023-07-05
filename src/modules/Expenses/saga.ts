import { 
    ADDEXPENSE,
    REMOVEEXPENSE,
    addExpenseSuccessAction,
    removeExpenseSuccessAction
} from './actions';
import {REQUEST} from "../../utils.js"
import { all, takeLatest } from 'redux-saga/effects';


function* addExpense(action) {
  yield put(addExpenseSuccessAction(action))
}

function* removeExpense(action) {
  yield put(removeExpenseSuccessAction(action))
}

// function* syncProductsSaga() {
//   try {
//     const productDetailsResponse = yield call(Tabletop.init,{
//       key: "1uEIXiVcmX6_bnAY6LjrOpmPCAa9nHw1uJx2HqMPFUmk",
//       simpleSheet: true
//     })
//     if(productDetailsResponse) {
//       yield put(fetchProductsSuccessAction(productDetailsResponse))
//     }
//   }
//   catch(error) {
// 		yield put(fetchProductsFailureAction(error))
//   }
// }

export default function* productSagaManager() {
  yield all([
    // yield fork(syncProductsSaga),
    takeLatest(REQUEST(ADDEXPENSE), addExpense),
    takeLatest(REQUEST(REMOVEEXPENSE), removeExpense)
  ])
}