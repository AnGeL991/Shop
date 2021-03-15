import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Field } from "components/common";
import { useLogic } from "_hooks";

export const LoginForm: FC = () => {
  const { handleChange, handleSubmit, account, alert } = useLogic();

  const { email, password } = account;

  const wrongLabel =
    alert.type === "ALERT_ERROR" ? (
      <div className="login__error">
        <label>{alert.message}</label>
      </div>
    ) : null;

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      {wrongLabel}
      <fieldset className="login__fildset">
        <Field
          type="text"
          name="login"
          required
          value={email}
          onChange={handleChange}
          title="E-mail Adress"
        />
        <Field
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          title="password"
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
