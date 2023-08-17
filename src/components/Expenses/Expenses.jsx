import React, {useState} from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses (props){

    const [userYear,setUserYear] = useState('2020');
    const yearChange = (year) => {
        setUserYear(year);
    
    }
    const filterExpenses = props.item.filter((expenseFilter) => expenseFilter.date.getFullYear().toString() === userYear)

    
    return(
        <>
            <Card className="expenses">
                <ExpensesFilter 
                    selected ={userYear} 
                    onYearChange={yearChange} 
                />
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList 
                items = {filterExpenses} />
            </Card>
        </>
    );
}

export default Expenses;