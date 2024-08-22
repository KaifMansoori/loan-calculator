import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, fontWeight:'600', fontSize:'1.5rem' }}>
          CorewithKaif
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
