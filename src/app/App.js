import React from "react";
import { CalcProvider } from "../provider";
import { MainLayout, NavMenu } from "../components";
import { StartPage, Questionnaire } from "../pages";
import { DESIGNER, FRONTEND } from "../constants";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <CalcProvider>
        <NavMenu />
        <MainLayout>
          <Route path="/start" render={() => <StartPage />} />
          <Route
            path="/designer"
            render={() => <Questionnaire data={DESIGNER} />}
          />
          <Route
            path="/frontend"
            render={() => <Questionnaire data={FRONTEND} />}
          />
        </MainLayout>
      </CalcProvider>
    </BrowserRouter>
  );
};

export default App;
