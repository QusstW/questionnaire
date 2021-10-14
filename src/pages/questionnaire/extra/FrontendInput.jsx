import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import s from "../../../styles/question.module.css";

const FrontendInput = ({ element, getNextEl }) => {
  //получаем вопрос
  let { question } = element;

  const handleClickButton = () => {};

  return (
    <div>
      <div className={s.question}>{question}</div>
      <div>
        <div style={{ display: "flex" }}>
          <TextField
            style={{ margin: "5% auto" }}
            id="standard-basic"
            label="Введите число от 0 - 10"
            variant="standard"
          />
        </div>
        <div className={s.buttonList}>
          <Button
            style={{ marginTop: "2%" }}
            variant="outlined"
            onClick={() => handleClickButton()}
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FrontendInput;
