import React, { useState } from "react";
import FrontendInput from "./extra/FrontendInput";
import EndPage from "./extra/EndPage";
import Button from "@mui/material/Button";
import s from "../../styles/question.module.css";
import useCalc from "../../hooks/useCalc";
import designer from "../../assets/images/designer.png";
import frontend from "../../assets/images/frontend.png";

const Questionnaire = ({ data }) => {
  const { calculate, progress } = useCalc();
  const [currentEl, setCurrentEl] = useState(0);

  if (currentEl === data.length) return <EndPage />;

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
    return <EndPage />;
  } else if (currentEl === 4 && progress <= 40 && type === "frontend") {
    return <EndPage />;
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
        {type === "frontend" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className={s.image} style={{ width: "20vw" }}>
              <img alt="" src={frontend} className={s.image} />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <div className={s.image} style={{ width: "20vw" }}>
              <img alt="" src={designer} className={s.image} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Questionnaire;
