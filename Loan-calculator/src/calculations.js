export function calculateLoan({
  principal,
  annualInterestRate,
  loanTermYears,
}) {
  const monthlyInterestRate = annualInterestRate / 100 / 12;

  const numberOfPayments = loanTermYears * 12;

  const monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  const totalPayment = monthlyPayment * numberOfPayments;

  const totalInterest = totalPayment - principal;


  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
  };
}


export function formatCurrency(amount) {
    if (typeof amount !== 'number') {
        amount = parseFloat(amount);
    }
    
    if (isNaN(amount)) return '';

    const formattedAmount = amount.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return formattedAmount;
}
