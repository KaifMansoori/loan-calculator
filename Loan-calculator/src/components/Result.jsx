import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { calculateLoan, formatCurrency } from '../calculations';

const Result = ({ userValue }) => {
  const loanResult = calculateLoan(userValue);

  return (
    <TableContainer component={Paper} elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
      <Typography variant="h6" component="div" gutterBottom>
        Loan Calculation Results
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>EMI</strong></TableCell>
            <TableCell align="center"><strong>Total Interest</strong></TableCell>
            <TableCell align="center"><strong>Total Payment</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{formatCurrency(loanResult.monthlyPayment)}</TableCell>
            <TableCell align="center">{formatCurrency(loanResult.totalInterest)}</TableCell>
            <TableCell align="center">{formatCurrency(loanResult.totalPayment)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Result;
