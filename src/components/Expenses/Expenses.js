import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredyear, setFilteredYear] = useState('2020');

    const filterChangehandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpense = props.items.filter((ex) => {
        return ex.date.getFullYear().toString() === filteredyear
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredyear}
                    onChangeFilter={filterChangehandler}
                />
                <ExpenseChart expenses={filteredExpense} />
                <ExpensesList expFilter={filteredExpense} />
            </Card>
        </div>
    )
}

export default Expenses;