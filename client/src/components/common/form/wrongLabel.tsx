import { FC } from "react";

interface LabelProps {
  message: string;
  type: string;
  big?:boolean;
}

export const WrongLabel: FC<LabelProps> = ({ type, message,big }) => {
  if (type !== "ALERT_ERROR") {
    return null;
  }
  return (
    <div className={`${big ? 'error_big': 'error'}`}>
      <label>{message}</label>
    </div>
  );
};
