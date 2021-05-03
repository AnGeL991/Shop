import { FC, useMemo } from "react";
import { Field, Button, WrongLabel } from "components/common";
import { AccountHeader } from "components/template";
import { useToggleClick, useGetState } from "_hooks";
import { useChangePassword } from "./useChangePassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPasswordFromAccount } from "_helpers/validateSchema";
import "../style/reset.scss";

interface IReset {
  active: boolean;
}

export const ResetPassword: FC<IReset> = ({ active }) => {
  const { open, handleToggle } = useToggleClick();
  const { handleChangePassword } = useChangePassword();
  const {
    alert: { type, message },
  } = useGetState();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(newPasswordFromAccount),
  });
  const wrongPassword = useMemo(() => <WrongLabel {...{ type, message }} />, [
    type,
    message,
  ]);

  return (
    <section className={`reset ${active && "reset--active"}`}>
      <AccountHeader {...{ open, handleToggle, text: "Change Password" }} />
      <article
        className={`reset__wrapper  ${open && "reset__wrapper--active"}`}
      >
        {wrongPassword}
        <form
          onSubmit={handleSubmit(handleChangePassword)}
          className="reset__form"
        >
          <fieldset className="reset__fieldset">
            <div className="reset__description">
              <h4 className="reset__subtitle">
                In order to <strong>protect your password,</strong> make sure
                your password:
              </h4>
              <ul className="reset__rules">
                <li>
                  <span>Is longer then 8 charackers</span>
                </li>
                <li>
                  <span>
                    Does not match or significantly contain your username, e.g.
                    do not use username123
                  </span>
                </li>
              </ul>
            </div>
            <div className='reset__password'>
              <Field
                name="newPassword"
                type="password"
                title="New Password"
                reference={register}
                error={errors["newPassword"]}
              />
              <Field
                name="confirmPassword"
                type="password"
                title="Confirm your new password"
                reference={register}
                error={errors["confirmPassword"]}
              />
              <div className="reset__buttons">
                <Button className="reset_button">Change Password</Button>
              </div>
            </div>
          </fieldset>
        </form>
      </article>
    </section>
  );
};
