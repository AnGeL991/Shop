import { FC } from "react";
import "./productBox.scss";

type Props = {
  name: string;
  className?: string;
  onClick?: () => void;
};

export const Tag: FC<Props> = ({ name, className = "tag" }) => {
  return (
    <button className={className}>
      <span>{name}</span>
    </button>
  );
};
