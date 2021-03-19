import { useDispatch, useSelector } from "react-redux";
import { userActions } from "store/user";
import { ApplicationState } from "store";

interface Account {
  email: string;
  password: string;
}

export const useLogic = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((store: ApplicationState) => store.user);

  const onSubmit = (user: Account) => {
    const { email, password } = user;
    dispatch(userActions.login(email, password));
  };

  return { onSubmit, error };
};
