import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Field } from "components/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "_yup";
import { useLogic } from "_hooks";

export const LoginForm: FC = () => {
  const { onSubmit,error } = useLogic();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const wrongLabel =
    error ? (
      <div className="login__error">
        <label>{error}</label>
      </div>
    ) : null;

  return (
    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
      {wrongLabel}
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
          <Link className="login__link" to="/login/forget-password">
            Forget password?
          </Link>
        </div>
      </fieldset>
    </form>
  );
};
