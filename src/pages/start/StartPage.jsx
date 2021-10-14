import React from "react";
import Button from "@mui/material/Button";
import s from "../../styles/question.module.css";
import { NavLink } from "react-router-dom";
import useCalc from "../../hooks/useCalc";

const StartPage = () => {
  const [start, setStart] = React.useState(true);
  const [branch, setBranch] = React.useState();

  const { calculate } = useCalc();

  const branchHelper = (type) => {
    setStart(false);
    setBranch(type);
  };

  const answersVacansy = [
    { answer: "Веб-дизайнер", type: "designer" },
    { answer: "Тестировщик", type: "tester" },
    { answer: "Джуниор фронтенд разработчик", type: "frontend" },
  ];
  const answersExp = [
    { answer: "Больше 5 лет работаю по этой специальности", value: 20 },
    { answer: "Ну немножко поработать успел", value: 10 },
    {
      answer: "Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",
      value: 0,
    },
  ];

  if (start)
    return (
      <div>
        <div className={s.question}>
          Для начала давай определимся на какую вакансию ты претендуешь?
        </div>

        <div className={s.buttonList}>
          {answersVacansy.map((e, index) => (
            <Button
              key={e + index}
              style={{ marginTop: "2%" }}
              variant="outlined"
              onClick={() => branchHelper(e.type)}
            >
              {e.answer}
            </Button>
          ))}
        </div>
      </div>
    );
  return (
    <div>
      <div className={s.question}>Есть ли у тебя опыт?</div>
      <NavLink style={{ textDecoration: "none" }} to={`/${branch}`}>
        <div className={s.buttonList}>
          {answersExp.map((e, index) => (
            <Button
              key={e + index}
              style={{ marginTop: "2%" }}
              variant="outlined"
              onClick={() => {}}
            >
              {e.answer}
            </Button>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default StartPage;
