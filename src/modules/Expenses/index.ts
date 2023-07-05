import { connect } from "react-redux";
import ExpensesList from "./components/ExpensesList";
import { 
    addExpenseRequestAction,
    removeExpenseRequestAction
} from "./actions"

const mapStateToProps = (state) => ({
    ...state.expenses
});

const mapDispatchToProps = {
    addExpenseRequestAction,
    removeExpenseRequestAction
};

export const ExC = connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);