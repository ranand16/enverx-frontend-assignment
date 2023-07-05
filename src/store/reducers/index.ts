import { combineReducers } from 'redux';
import expenses from '../../modules/Expenses/reducer';

const rootReducer = combineReducers({
    expenses
});

export default rootReducer;
