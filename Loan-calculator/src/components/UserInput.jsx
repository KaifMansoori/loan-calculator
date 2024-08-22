import React from "react";
import { TextField, Grid, Box } from "@mui/material";

const UserInput = ({ userValue, onChange }) => {
  return (
    <Box component="form" id="input-group" sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            label="Loan Amount"
            type="number"
            variant="outlined"
            value={userValue.principal}
            onChange={(e) => onChange("principal", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Interest Rate (%)"
            type="number"
            variant="outlined"
            value={userValue.annualInterestRate}
            onChange={(e) => onChange("annualInterestRate", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Tenure (Years)"
            type="number"
            variant="outlined"
            value={userValue.loanTermYears}
            onChange={(e) => onChange("loanTermYears", e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserInput;
