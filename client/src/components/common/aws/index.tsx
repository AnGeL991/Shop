import { FC, ReactNode } from "react";
import { SVG } from "svg";
import "./aws.scss";

interface IAwsButton {
  children: ReactNode;
  className?: string;
  icon?: boolean;
}

export const AwsButton: FC<IAwsButton> = ({ icon }) => {
  return (
    <button className={`awsButton`}>
      {icon && (
        <img src={SVG.AWS} alt="AWS Cognito logo" className="awsButton__icon" />
      )}
      <a href="https://shop.auth.eu-west-2.amazoncognito.com/login?client_id=7r47kh0gdld9pi8o4f3dkjfudh&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http://localhost:3000/login"
      className='awsButton__link'
      >
        Login with cognito
      </a>
    </button>
  );
};
