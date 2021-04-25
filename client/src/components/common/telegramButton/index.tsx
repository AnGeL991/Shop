import { FC } from "react";
import {SVG} from "svg";
import "./style/style.scss";

interface ITelegramButton {
  handleToggle: () => void;
}

export const TelegramButton: FC<ITelegramButton> = ({ handleToggle }) => {
  return (
    <img
      src={SVG.TELEGRAM}
      alt="telegram button"
      onClick={handleToggle}
      className="telegram"
    />
  );
};
