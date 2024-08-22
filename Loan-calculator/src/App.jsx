import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import Header from "./components/Header";
import { Container, Grid, Paper, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ffc400",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
    fontFamily: "reddit-sans, sans-serif",

    h5: {
      fontWeight: 600,
    },

    body1: {
      color: "#666",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  const [userValue, setUserValue] = useState({
    principal: 24500,
    annualInterestRate: 9,
    loanTermYears: 15,
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserValue((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Typography
        variant="h1"
        sx={{ mt: 3, textAlign: "center", fontSize: "2rem", fontWeight: "600" }}
      >
        Loan Calculator
      </Typography>
      <Container>
        <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
          <Paper elevation={4} sx={{ p: 4, backgroundColor: "#ffffff" }}>
            <UserInput userValue={userValue} onChange={handleUserInput} />
            <Result userValue={userValue} />
          </Paper>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
