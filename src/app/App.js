import React from "react";
import MainLayout from "../components/mainLayout/MainLayout";
import { CalcProvider } from "../provider";
import Test from "../components/test/Test";

const App = () => {
  return (
    <CalcProvider>
      <MainLayout>
        <Test />
      </MainLayout>
    </CalcProvider>
  );
};

export default App;
