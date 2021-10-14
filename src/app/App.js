import React from "react";
import { CalcProvider } from "../provider";
import { MainLayout, NavMenu } from "../components";
import { StartPage, Questionnaire, Tester, Welcome } from "../pages";
import { DESIGNER, FRONTEND } from "../constants";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
