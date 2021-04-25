import { FC } from "react";
import { Icons } from "components/common";

interface IAccountHeader {
  open: boolean;
  handleToggle: () => void;
  text:string
}

export const AccountHeader: FC<IAccountHeader> = ({ handleToggle, open,text }) => {
  const { ArrowDown, ArrowUp } = Icons;

  const arrow = open ? (
    <ArrowUp className="myAccount__icon" />
  ) : (
    <ArrowDown className="myAccount__icon" />
  );

  return (
    <div className="myAccount__header" onClick={handleToggle}>
      <h3 className="myAccount__title">{text}</h3>
      {arrow}
    </div>
  );
};
