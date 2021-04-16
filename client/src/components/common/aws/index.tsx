import { FC, ReactNode } from "react";
import AWS from "aws-cognito.svg";
import "./aws.scss";

interface IAwsButton {
  handleClick?: () => void;
  children: ReactNode;
  className?: string;
  icon?: boolean;
}

export const AwsButton: FC<IAwsButton> = ({
  handleClick,
  children,
  className,
  icon,
}) => {
  return (
    <button className={`awsButton ${className}`} onClick={handleClick}>
      {icon && (
        <img src={AWS} alt="AWS Cognito logo" className="awsButton__icon" />
      )}
      {children}
    </button>
  );
};
