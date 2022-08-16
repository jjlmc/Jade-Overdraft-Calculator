import React, {useState} from 'react';

export function overdraftCalculator(balance, spendings, creditLimit) {
 
    const grossBalance = balance - spendings;
    const overdraftUsed = Math.abs(grossBalance)
    const overdraftExceeded = overdraftUsed - creditLimit

    if (grossBalance >= 0) {
        const unusedOverdraftMessage = `You haven't used any of your overdraft credit. You have $${grossBalance} remaining`;
        return unusedOverdraftMessage;
    } else if (overdraftExceeded > 0) {
        const overdraftExceededMessage = `You have exceeded your overdraft limit by $${overdraftExceeded}`;
        return overdraftExceededMessage;
    } else {
        const overdraftRemainingMessage = `You have used $${overdraftUsed} from your overdraft limit of $${creditLimit}`;
        return overdraftRemainingMessage;
    }
}