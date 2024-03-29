import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export default function CalcProvider(props) {
  //текущая вероятность
  const [progress, setProgress] = useState(0);

  //функция вычисления текущей вероятности
  const calculate = (value, isLast) => {
    if (isLast === true) {
      let extra = Math.round(progress * value);
      //проверка на значение больше 100 (п.с. меньше 0 на данном этапе быть не может)
      if (extra > 100) {
        setProgress(100);
      } else {
        setProgress(extra);
      }
    } else {
      let extra = value + progress;
      if (extra > 100) {
        setProgress(100);
      } else if (extra < 0) {
        setProgress(0);
      } else {
        setProgress(extra);
      }
    }
  };

  const updateState = () => {
    setProgress(0);
  };

  return (
    <CalcContext.Provider
      value={{
        progress,
        setProgress,
        //вычисление прогресса
        calculate,
        //
        updateState,
      }}
      {...props}
    />
  );
}
