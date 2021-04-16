import { FC } from "react";
import Telegram from "telegram.svg";
import "./style/style.scss";

interface ITelegramButton {
  handleToggle: () => void;
}

export const TelegramButton: FC<ITelegramButton> = ({ handleToggle }) => {
  return (
    <img
      src={Telegram}
      alt="telegram button"
      onClick={handleToggle}
      className="telegram"
    />
  );
};
