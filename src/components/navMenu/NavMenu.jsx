import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCalc from "../../hooks/useCalc";

export default function NavMenu() {
  const { progress } = useCalc();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit" component="div">
          Тест потенциального сотрудника
        </Typography>
        <div>{progress}</div>
      </AppBar>
    </Box>
  );
}
