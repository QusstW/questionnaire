import React from "react";
import { NavLink } from "react-router-dom";
import useCalc from "../../../hooks/useCalc";
import s from "../../../styles/question.module.css";
import Button from "@mui/material/Button";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import MoodIcon from "@mui/icons-material/Mood";

const EndPage = () => {
  const { progress, updateState } = useCalc();

  if (progress < 51) {
    return (
      <div>
        <div className={s.question}>К сожалению, нам с тобой не по пути.</div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <MoodBadIcon
            style={{ width: "40%", height: "auto", color: "#ff6d6d" }}
          />
        </div>
        <NavLink style={{ textDecoration: "none" }} to="/start">
          <div className={s.buttonList}>
            <Button
              style={{ marginTop: "2%" }}
              variant="outlined"
              onClick={() => updateState()}
            >
              Начать сначала
            </Button>
          </div>
        </NavLink>
      </div>
    );
  } else if (progress >= 51 && progress <= 80) {
    return (
      <div>
        <div className={s.question}>
          Ну если больше никто не придёт, то возьмём тебя
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <SentimentDissatisfiedIcon
            style={{ width: "40%", height: "auto", color: "#d7d76f" }}
          />
        </div>
        <NavLink style={{ textDecoration: "none" }} to="/start">
          <div className={s.buttonList}>
            <Button
              style={{ marginTop: "2%" }}
              variant="outlined"
              onClick={() => updateState()}
            >
              Начать сначала
            </Button>
          </div>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <div className={s.question}>Проверь почту, там уже лежит оффер</div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <MoodIcon
            style={{ width: "40%", height: "auto", color: "#b5f9b5" }}
          />
        </div>
        <NavLink style={{ textDecoration: "none" }} to="/start">
          <div className={s.buttonList}>
            <Button
              style={{ marginTop: "2%" }}
              variant="outlined"
              onClick={() => updateState()}
            >
              Начать сначала
            </Button>
          </div>
        </NavLink>
      </div>
    );
  }
};
export default EndPage;
