import { all } from 'redux-saga/effects';
import productSagaManager from '../../modules/Expenses/saga';
// import productSagaManager from '../../modules/Products/saga'

export default function* rootSaga() {
  yield all([
    productSagaManager()
  ]);
}