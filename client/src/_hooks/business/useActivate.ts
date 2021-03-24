import { userActions } from "store/user";
import { history } from "_helpers/history";
import { useFormLogic } from "_hooks";

export const useActivate = () => {
  const { onSubmit } = useFormLogic();

  const submit = (token: string) => {
    onSubmit(userActions.ActiveAccount, [token]);
    history.push("/");
  };

  return { submit };
};
