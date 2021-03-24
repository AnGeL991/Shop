import { FC } from "react";
import { Field } from "components/common";
import { AccountOperation, Modal } from "components/template";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "_yup";
import { useLoginLogic } from "_hooks";

export const ForgetPassword: FC = () => {
  const {
    forgetSubmit,
    message,
    type,
    showModal,
    handleToggle,
  } = useLoginLogic();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const wrongEmail =
    type === "ALERT_ERROR" ? <span className="error">{message}</span> : null;

  const modalAlert = (
    <Modal
      show={showModal}
      close={handleToggle}
      className="alert"
      title="Check your mail"
    >
      <p className="alert__success">{message}</p>
    </Modal>
  );

  return (
    <section className="page">
      <AccountOperation
        title="Reset password"
        description="Enter your user account's verified email address and we will send
      you a password reset link."
        btnText="Send password reset email"
        onClick={handleSubmit(forgetSubmit)}
      >
        {wrongEmail}
        {modalAlert}
        <Field
          name="email"
          placeholder="Enter your email address"
          reference={register}
          error={errors["email"]}
        />
      </AccountOperation>
    </section>
  );
};
