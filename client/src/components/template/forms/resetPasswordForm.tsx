import { FC, useMemo } from "react";
import { Field, WrongLabel } from "components/common";
import { Operation, ModalAlert } from "components/template";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPasswordSchema } from "_helpers";
import { useLoginLogic } from "_hooks";

export const ResetPasswordForm: FC<{ token: string }> = ({ token }) => {
  const {
    type,
    message,
    newPasswordSubmit,
    handleToggle,
    showModal,
  } = useLoginLogic("/", token);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(newPasswordSchema),
  });

  const wrongPassword = useMemo(() => <WrongLabel {...{ type, message }} />, [
    type,
    message,
  ]);

  const Alert = useMemo(
    () => (
      <ModalAlert
        {...{ showModal, handleToggle }}
        title="Successful password reset!"
        description="You can now use your new password to log in to your account"
      />
    ),
    [handleToggle, showModal]
  );

  return (
    <>
      {Alert}
      <Operation
        title="Change Password"
        description=" Your new password must be diffrent from previous used passwords"
        btnText="Reset Password"
        onClick={handleSubmit(newPasswordSubmit)}
      >
        {wrongPassword}
        <form>
          <Field
            name="password"
            type="password"
            title=" new password"
            reference={register}
            error={errors["password"]}
          ></Field>
          <Field
            name="passwordConfirmation"
            type="password"
            title="confirm new Password"
            reference={register}
            error={errors["passwordConfirmation"]}
          ></Field>
        </form>
      </Operation>
    </>
  );
};
