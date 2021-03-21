import { userActions } from "store/user";
import { useFormLogic } from "_hooks";
interface Account {
  email: string;
  password: string;
  to?: string;
}

export const useLoginLogic = (to?: string) => {
  const { error, onSubmit } = useFormLogic();

  const submit = (user: Account) =>
    onSubmit(userActions.login, [user.email, user.password, to]);

  return { submit, error };
};
