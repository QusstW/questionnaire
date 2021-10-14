import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export default function CalcProvider(props) {
  const [test, setTest] = useState("test");

  return <CalcContext.Provider value={{ test }} {...props} />;
}
