import { FC, ReactNode } from "react";
import { Button } from "components/common";

interface Operation {
  title: string;
  description: string;
  btnText: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const AccountOperation: FC<Operation> = ({
  title,
  description,
  children,
  btnText,
  onClick,
}) => {
  return (
    <article className="operation">
      <div className="operation__wrapper">
        <h4 className="operation__title">{title}</h4>
        <p className="operation__description">{description}</p>
        {children}
        <Button className="operation__btn" onClick={onClick}>
          {btnText}
        </Button>
      </div>
    </article>
  );
};
