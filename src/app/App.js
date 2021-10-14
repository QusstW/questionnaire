import React from "react";
import { CalcProvider } from "../provider";
import { MainLayout, NavMenu } from "../components";
import { StartPage, Questionnaire, Tester, Welcome } from "../pages";
import { DESIGNER, FRONTEND } from "../constants";
import { BrowserRouter, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#222222",
      },
      secondary: {
        main: "#18ffff",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CalcProvider>
          <NavMenu />
          <MainLayout>
            <Welcome />
            <Route path="/start" render={() => <StartPage />} />
            <Route
              path="/designer"
              render={() => <Questionnaire data={DESIGNER} />}
            />
            <Route
              path="/frontend"
              render={() => <Questionnaire data={FRONTEND} />}
            />
            <Route path="/tester" render={() => <Tester />} />
          </MainLayout>
        </CalcProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
