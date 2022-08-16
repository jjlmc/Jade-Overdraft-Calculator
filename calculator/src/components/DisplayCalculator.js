import React, {useState} from 'react';
import TextInput from './TextInput';

export default function DisplayCalculator() {
    const [accountBalance, setAccountBalance] = useState(0);
    const [totalSpending, setTotalSpending] = useState(0);
    const [creditLimit, setCreditLimit] = useState(0);

    return (
        <div>
            <div>
                <h3>Starting Account Balance</h3>
                <TextInput />
            </div>
            <div>
                <h3>Total Monthly Spendings</h3>
                <TextInput />
            </div>
            <div>
                <h3>Credit Limit</h3>
                <TextInput />
            </div>
        </div>
    )
}