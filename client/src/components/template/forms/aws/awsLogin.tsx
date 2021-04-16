import { FC } from "react";
import { Link } from "react-router-dom";
import { Field, AwsButton } from "components/common";
import { useAwsLogic } from "./hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validateSchema";
import "./style/index.scss";

export const AwsLogin: FC = () => {
  const { login } = useAwsLogic();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <article className="awsForm">
      <form className="awsForm__form" onSubmit={handleSubmit(login)}>
        <legend className="awsForm__legend">Aws login</legend>
        <fieldset className="awsForm__fieldset">
          <div className="awsForm__description">
            <span>Sign in with your email and password</span>
          </div>
          <Field
            type="text"
            name="email"
            required
            title="Username"
            reference={register}
            error={errors["email"]}
          />
          <Field
            type="password"
            name="password"
            required
            title="password"
            reference={register}
            error={errors["password"]}
          />
          <AwsButton className="awsForm__button">Log in</AwsButton>
          <div className="awsForm__forgot">
            <Link className="awsForm__link" to="/cognito/forgetPassword">
              Forgot password?
            </Link>
          </div>
        </fieldset>
      </form>
    </article>
  );
};
