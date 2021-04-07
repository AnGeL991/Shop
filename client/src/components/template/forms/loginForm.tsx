import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button, Field, WrongLabel } from "components/common";
import { CreateAccount } from "components/template";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validateSchema";
import { useLoginLogic } from "_hooks";
import "./style/loginForm.scss";

type LoginFormProps = {
  to?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ to }) => {
  const { submit, message, type } = useLoginLogic(to);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const wrong = useMemo(() => <WrongLabel {...{ message, type }} big />, [
    message,
    type,
  ]);

  return (
    <section className="login">
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
      <CreateAccount/>
    </section>
  );
};
