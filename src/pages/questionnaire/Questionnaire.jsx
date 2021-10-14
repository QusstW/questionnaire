import React, { useState } from "react";
import FrontendInput from "./extra/FrontendInput";
import Button from "@mui/material/Button";
import s from "../../styles/question.module.css";
import useCalc from "../../hooks/useCalc";

const Questionnaire = ({ data }) => {
  const { calculate, progress } = useCalc();
  const [currentEl, setCurrentEl] = useState(0);

  if (currentEl === data.length) return <div>Конец</div>;

  //текущий объект массива(вопрос)
  let element = data[currentEl];
  let { answers } = data[currentEl];
  let { type } = data[currentEl];

  const getNextEl = (value, isLast) => {
    setCurrentEl(currentEl + 1);
    //вызывать функцию с провайдера и передать значение
    calculate(value, isLast);
  };

  if (currentEl === 4 && progress <= 50 && type === "designer") {
    return <div> end</div>;
  } else if (currentEl === 4 && progress <= 40 && type === "frontend") {
    return <div>end</div>;
  } else if (currentEl === 2 && type === "frontend") {
    return <FrontendInput element={element} getNextEl={getNextEl} />;
  }

  return (
    <>
      <div className={s.question}>{element.question}</div>
      <div className={s.buttonList}>
        {answers.map((e) => (
          <Button
            style={{ marginTop: "2%" }}
            variant="outlined"
            onClick={() => getNextEl(e.value, element.isLast)}
          >
            {e.answer}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Questionnaire;
