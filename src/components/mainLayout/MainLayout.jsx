import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "70vw",
          height: "90vh",
          margin: "3% auto",
        },
      }}
    >
      <Paper elevation={8}> {children}</Paper>
    </Box>
  );
};

export default MainLayout;
