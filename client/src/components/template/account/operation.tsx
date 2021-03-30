import { FC, ReactNode, useMemo } from "react";
import { Button } from "components/common";
import { Link } from "react-router-dom";

interface OperationProps {
  title: string;
  description: string;
  btnText: string | ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  link?: string;
}

export const Operation: FC<OperationProps> = ({
  title,
  description,
  children,
  btnText,
  onClick,
  link,
}) => {
  const button = useMemo(
    () =>
      link ? (
        <Link to={link}>
          <Button className="operation__btn" onClick={onClick}>
            {btnText}
          </Button>
        </Link>
      ) : (
        <Button className="operation__btn" onClick={onClick}>
          {btnText}
        </Button>
      ),
    [link, onClick, btnText]
  );

  return (
    <article className="operation">
      <div className="operation__wrapper">
        <h4 className="operation__title">{title}</h4>
        <p className="operation__description">{description}</p>
        {children}
        {button}
      </div>
    </article>
  );
};
