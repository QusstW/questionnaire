import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../styles/question.module.css";
import Button from "@mui/material/Button";
import useCalc from "../../hooks/useCalc";
import tester from "../../assets/images/tester.png";
const Tester = () => {
  const { updateState } = useCalc();
  return (
    <div>
      <div className={s.question}>
        Прости, но такой вакансии пока нет, может на кого-то другого хочешь
        попробоваться?
      </div>
      <NavLink style={{ textDecoration: "none" }} to="/start">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3%",
          }}
        >
          <div className={s.image} style={{ width: "20vw" }}>
            <img alt="" src={tester} className={s.image} />
          </div>
        </div>
        <div className={s.buttonList}>
          <Button
            style={{ marginTop: "20%" }}
            variant="outlined"
            onClick={() => updateState()}
          >
            Вернуться назад
          </Button>
        </div>
      </NavLink>
    </div>
  );
};

export default Tester;
