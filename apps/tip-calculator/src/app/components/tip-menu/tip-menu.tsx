import React from "react";
import { useRecoilState } from "recoil";
import "./tip-menu.css";
import { TipMenuButton } from "../tip-menu-button";
import { tipPercentage } from "../../lib/state";

const percentageValues = [5, 10, 15, 25, 50];

export const TipMenu: React.FC = () => {
  const [percent, setPercent] = useRecoilState(tipPercentage);
  const handleClick = (val: number) => setPercent(val);
  const inputHandler = (e: any) => setPercent(Math.abs(e.target.value));
  const buttons = percentageValues.map((el) => (
    <TipMenuButton
      key={`menu-button-${el}`}
      value={el}
      clickHandler={handleClick}
    />
  ));
  return (
    <>
      <span className="tip-menu__header">Select Tip %</span>
      <div className="tip-menu">
        {buttons}
        <input
          className="tip-menu__input"
          placeholder="Custom"
          type="number"
          value={percent || ""}
          onChange={inputHandler}
        />
      </div>
    </>
  );
};
