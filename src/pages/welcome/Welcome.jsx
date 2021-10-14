import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../styles/question.module.css";
import Button from "@mui/material/Button";

const Welcome = () => {
  const [welcome, setWelcome] = React.useState(true);
  if (welcome)
    return (
      <div>
        <div className={s.question}>
          Пройдем тест на потенциальную должность?
        </div>
        <NavLink style={{ textDecoration: "none" }} to="/start">
          <div className={s.buttonList}>
            <Button
              style={{ marginTop: "10%" }}
              variant="outlined"
              onClick={() => setWelcome(false)}
            >
              А давай!
            </Button>
          </div>
        </NavLink>
      </div>
    );
  return <> </>;
};
export default Welcome;
