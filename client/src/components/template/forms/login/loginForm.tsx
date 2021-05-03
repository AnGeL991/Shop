import { FC, useMemo } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Field, WrongLabel, AwsButton } from "components/common";
import { CreateAccount } from "components/template";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "_helpers";
import { useLoginLogic } from "_hooks";
import "./loginForm.scss";

type LoginFormProps = {
  to?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ to }) => {
  const { submit, message, type, isAuthenticated } = useLoginLogic(to);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const wrong = useMemo(() => <WrongLabel {...{ message, type }} big />, [
    message,
    type,
  ]);

  if (isAuthenticated) {
    return <Redirect to="/myAccount" />;
  }
  return (
    <section className="login">
      <article className="login__wrapper">
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          {wrong}
          <fieldset className="login__fildset">
            <Field
              type="text"
              name="email"
              required
              title="E-mail Adress"
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
            <div className="login__buttons">
              <Button>Log in</Button>
              <Link className="login__link" to="/users/forgetPassword">
                Forgot password?
              </Link>
            </div>
          </fieldset>
        </form>
        <div className="login__otherWay">
          <span>Or</span>
        </div>
        <AwsButton icon>
          <a href="https://shop.auth.eu-west-2.amazoncognito.com/login?response_type=token&client_id=7r47kh0gdld9pi8o4f3dkjfudh&redirect_uri=http://localhost:3000/login"
            className='a'
          >
            Login with cognito
          </a>
        </AwsButton>
      </article>
      <CreateAccount />
    </section>
  );
};
