import React, {useState, useEffect} from 'react';
import TextInput from './TextInput';
import { overdraftCalculator } from '../utils/calculatorUtils';

export default function DisplayCalculator() {
    const [accountBalance, setAccountBalance] = useState(0);
    const [totalSpending, setTotalSpending] = useState(0);
    const [creditLimit, setCreditLimit] = useState(0);
    const [overdraftDisplay, setOverdraftDisplay] = useState("");

    const handleBalanceChange = (newValue) => {
        setAccountBalance(newValue);
        // calculateOverdraft();
    };
    const handleSpendingChange = (newValue) => {
        setTotalSpending(newValue);
        // calculateOverdraft();
    };
    const handleCreditChange = (newValue) => {
        setCreditLimit(newValue);
        // calculateOverdraft();
    };
    const calculateOverdraft = () => {
        const overdraftTotal = overdraftCalculator(accountBalance, totalSpending, creditLimit);
        setOverdraftDisplay(overdraftTotal);
    };
    useEffect(() => {
        calculateOverdraft()
    }, [accountBalance, totalSpending, creditLimit])

    return (
        <div>
            <div>
                <h3>Starting Account Balance</h3>
                <TextInput valueChange={handleBalanceChange}/>
            </div>
            <div>
                <h3>Total Monthly Spendings</h3>
                <TextInput valueChange={handleSpendingChange}/>
            </div>
            <div>
                <h3>Credit Limit</h3>
                <TextInput valueChange={handleCreditChange}/>
            </div>
            <div>
                <h3>{overdraftDisplay}</h3>
            </div>
        </div>
    )
}