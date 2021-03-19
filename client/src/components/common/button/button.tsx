import { FC, ReactNode } from "react";
import "./button.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  darkButton?: boolean;
  smallButton?:boolean;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
  darkButton,
  smallButton
}) => {
  return (
    <button
      className={`
      
      button
      ${darkButton && "button--dark"}
      ${smallButton && "button--small"}
      ${className} 
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
