import { useEffect } from "react";
import { history } from "_helpers/history";
import { userActions } from "store/user";
import { useFormLogic, useModalLogic, useGetState } from "_hooks";
import { Account, Forget, Password, MatchProps } from "components/interfaces";
import { client } from "_api";

export const useLoginLogic = (to?: string, token?: string) => {
  const { onSubmit } = useFormLogic();
  const { showModal, handleToggleModal, setShowModal } = useModalLogic();
  const {
    Login,
    ForgetPassword,
    ResetPassword,
    ActiveAccount,
    loadUser,
  } = userActions;
  const {
    alert: { type, message },
    user: { isAuthenticated },
  } = useGetState();

  const submit = (user: Account) =>
    onSubmit(Login, [user.email, user.password, to]);

  const forgetSubmit = (props: Forget) =>
    onSubmit(ForgetPassword, [props.email]);

  const newPasswordSubmit = (props: Password) => {
    onSubmit(ResetPassword, [props.password, token]);
  };
  const activateAccount = () => {
    onSubmit(ActiveAccount, [token]);
  };
  const LoginWithCognito = async (props: MatchProps) => {
    const code = props.location.search.split("?code=")[1];
    const result = await client("oauth/cognito", { code }, "", {
      method: "POST",
    });
    if (result) {
      localStorage.setItem("Token", JSON.stringify(result.token));
      onSubmit(loadUser, [result.token]);
    }
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
    isAuthenticated,
    showModal,
    submit,
    forgetSubmit,
    newPasswordSubmit,
    activateAccount,
    handleToggle,
    LoginWithCognito,
  };
};
