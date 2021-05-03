import { FC, useMemo } from "react";
import { Field, WrongLabel } from "components/common";
import { Operation, ModalAlert } from "components/template";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "_helpers";
import { useLoginLogic } from "_hooks";

export const ForgetPasswordForm: FC = () => {
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

  const wrong = useMemo(() => <WrongLabel {...{ type, message }} />, [
    message,
    type,
  ]);

  const alert = useMemo(
    () => (
      <ModalAlert
        {...{ handleToggle, showModal }}
        title="Check your mail"
        description={message}
      />
    ),
    [handleToggle, showModal, message]
  );

  return (
    <Operation
      title="Reset password"
      description="Enter your user account's verified email address and we will send
      you a password reset link."
      btnText="Send password reset email"
      onClick={handleSubmit(forgetSubmit)}
    >
      {wrong}
      {alert}
      <form>
        <Field
          name="email"
          placeholder="Enter your email address"
          reference={register}
          error={errors["email"]}
        />
      </form>
    </Operation>
  );
};
