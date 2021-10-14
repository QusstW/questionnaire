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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ fontSize: "25px" }}
          >
            Тест потенциального сотрудника
          </Typography>
          <div style={{ fontSize: "25px" }}>Прогресс {progress}</div>
        </div>
      </AppBar>
    </Box>
  );
}
