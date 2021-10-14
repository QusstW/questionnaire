import React from "react";

import { CalcContext } from "../provider/CalcProvider";

export default function useCalcHoook() {
  return React.useContext(CalcContext);
}
