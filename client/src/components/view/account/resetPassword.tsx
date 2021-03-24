import { FC } from "react";
import { MatchProps } from "components/interface";
import { Field } from "components/common";
import { AccountOperation,Modal } from "components/template";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPasswordSchema } from "_yup";
import { useLoginLogic } from "_hooks";

export const ResetPassword: FC<MatchProps> = ({ match }) => {
  const { type, message,newPasswordSubmit,handleToggle,showModal } = useLoginLogic('/',match.params.token);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(newPasswordSchema),
  });

  const wrongPassword =
  type === "ALERT_ERROR" ? <span className="error">{message}</span> : null;

const modalAlert = (
  <Modal
    show={showModal}
    close={handleToggle}
    className="alert"
    title="Successful password reset!"
  >
    <p className="alert__success">You can now use your new password to log in to your account</p>
  </Modal>
);

  return (
    <section className="page">
      {modalAlert}
      <AccountOperation
        title="Change Password"
        description=" Your new password must be diffrent from previous used passwords"
        btnText="Reset Password"
        onClick={handleSubmit(newPasswordSubmit)}
      >
        {wrongPassword}
        <Field
          name="password"
          type='password'
          title=" new password"
          reference={register}
          error={errors['password']}
        ></Field>
        <Field
          name="passwordConfirmation"
          type='password'
          title="confirm new Password"
          reference={register}
          error={errors['passwordConfirmation']}
        ></Field>
      </AccountOperation>
    </section>
  );
};
