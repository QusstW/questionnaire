import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import s from "../../../styles/question.module.css";

const FrontendInput = ({ element, getNextEl }) => {
  const [error, setError] = useState(false);
  //получаем вопрос
  let { question } = element;

  const inputProps = {
    step: 1,
  };
  const inputEl = useRef();

  const handleClickButton = (value) => {
    let extra = Number(value);
    if (extra === 0) {
      getNextEl(20);
    } else if (extra > 0 && extra <= 10) {
      getNextEl(-50);
    }
  };

  const handleChangeInput = (value) => {
    setError(false);
    if (value < 0 || value > 10) {
      setError(true);
    }
  };

  return (
    <div>
      <div className={s.question}>{question}</div>
      <div>
        <div className={s.question}>
          Введите число от 0 до 10, где 0 — это совершенно не люблю, а 10 —
          обожаю
        </div>
        <div style={{ display: "flex", maxWidth: "60vw", margin: "auto" }}>
          <TextField
            style={{ margin: "5% auto" }}
            id="standard-basic"
            label="Введите число от 0 - 10"
            variant="standard"
            inputProps={inputProps}
            fullWidth={true}
            error={error}
            inputRef={inputEl}
            type="number"
            onChange={() => handleChangeInput(inputEl.current.value)}
          />
        </div>
        <div className={s.buttonList}>
          <Button
            style={{ marginTop: "2%" }}
            variant="outlined"
            onClick={() => handleClickButton(inputEl.current.value)}
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FrontendInput;
