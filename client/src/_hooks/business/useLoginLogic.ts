import { useEffect } from "react";
import { history } from "_helpers/history";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import { userActions } from "store/user";
import { useFormLogic, useModalLogic } from "_hooks";
import { Account, Forget, Password } from "components/interfaces";

export const useLoginLogic = (to?: string, token?: string) => {
  const { onSubmit } = useFormLogic();
  const { showModal, handleToggleModal, setShowModal } = useModalLogic();
  const { message, type } = useSelector(
    (state: ApplicationState) => state.alert
  );

  const submit = (user: Account) =>
    onSubmit(userActions.Login, [user.email, user.password, to]);

  const forgetSubmit = (props: Forget) =>
    onSubmit(userActions.ForgetPassword, [props.email]);

  const newPasswordSubmit = (props: Password) => {
    onSubmit(userActions.ResetPassword, [props.password, token]);
  };
  const activateAccount = () => {
    onSubmit(userActions.ActiveAccount, [token]);
  };

  useEffect(() => {
    if (type === "ALERT_SUCCESS") {
      setShowModal(true);
    }
  }, [setShowModal, type]);

  const handleToggle = () => {
    handleToggleModal();
    history.push("/");
  };
  return {
    type,
    message,
    submit,
    forgetSubmit,
    newPasswordSubmit,
    activateAccount,
    showModal,
    handleToggle,
  };
};
