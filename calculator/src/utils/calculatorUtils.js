export function overdraftCalculator(balance, spendings, creditLimit) {
 
    const roundToTwo = (num) => {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    };

    const grossBalance = roundToTwo(balance - spendings);
    const overdraftUsed = roundToTwo(Math.abs(grossBalance));
    const overdraftExceeded = roundToTwo(overdraftUsed - creditLimit);
    // Assuming interest is only based on the excess interest rate documented here https://www.anz.co.nz/personal/accounts/everyday-banking/overdraft/
    const interestRate = 27.9;
    const interestOwed = roundToTwo(overdraftExceeded / 100 * interestRate);
    const overdraftTotals = {};

    if (grossBalance >= 0) {
        const unusedOverdraftMessage = `You haven't used any of your overdraft credit. You have $${grossBalance} remaining`;
        overdraftTotals.overdraftMessage = unusedOverdraftMessage;
    } else if (overdraftExceeded > 0) {
        const overdraftExceededMessage = `You have exceeded your overdraft limit by $${overdraftExceeded}`;
        const interestMessage = `Interest for exceeding your credit limit is $${interestOwed} at 27.9% p.a.`
        overdraftTotals.overdraftMessage = overdraftExceededMessage;
        overdraftTotals.interest = interestMessage;
    } else {
        const overdraftRemainingMessage = `You have used $${overdraftUsed} from your overdraft limit of $${creditLimit}`;
        overdraftTotals.overdraftMessage = overdraftRemainingMessage;
    };

   
    return overdraftTotals
};
