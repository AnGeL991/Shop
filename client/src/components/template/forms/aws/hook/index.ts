import { userActions } from "store/user";
import { useFormLogic } from "_hooks";
import { Account, Forget, IAwsUser, Password } from "components/interfaces";

export const useAwsLogic = (to?: string, token?: string) => {
  const { onSubmit } = useFormLogic();

  const login = (user: Account) =>
    onSubmit(userActions.Login, [user.email, user.password, to, true]);

  const forgotSubmit = (props: Forget) =>
    onSubmit(userActions.ForgetPassword, [props.email, true]);

  const newPasswordSubmit = (props: Password) => {
    onSubmit(userActions.ResetPassword, [props.password, token, true]);
  };
  const userRegister = (user: IAwsUser) =>
    onSubmit(userActions.Register, [user, true]);

  return {
    login,
    userRegister,
    forgotSubmit,
    newPasswordSubmit,
  };
};
