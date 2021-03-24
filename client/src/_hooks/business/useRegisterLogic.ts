import { useState, useEffect } from "react";
import { User } from "db";
import { userActions } from "store/user";
import { history } from "_helpers/history";
import { useFormLogic, useCheckedRule, useModalLogic } from "_hooks";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useRegisterLogic = () => {
  const { inputRules, handleSetRegulation } = useCheckedRule();
  const { onSubmit } = useFormLogic();
  const {
    showModal,
    StopPropagation,
    setShowModal,
    handleToggleModal,
  } = useModalLogic();

  const { type, message } = useSelector(
    (state: ApplicationState) => state.alert
  );

  const [status, setStatus] = useState("no password");

  const submit = (user: User) => onSubmit(userActions.Register, [user]);

  const handleToggole = () => {
    if (type === "ALERT_SUCCESS") {
      handleToggleModal();
      history.push("/");
    }
    handleToggleModal();
  };

  useEffect(() => {
    if (message) {
      setShowModal(true);
    }
  }, [message, setShowModal]);

  return {
    status,
    submit,
    message,
    type,
    showModal,
    inputRules,
    handleSetRegulation,
    StopPropagation,
    handleToggole,
  };
};
