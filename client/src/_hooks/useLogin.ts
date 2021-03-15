import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "store/user";
import { ApplicationState } from "store";

interface Account {
  email: string;
  password: string;
}

export const useLogic = () => {
  const alert = useSelector((store: ApplicationState) => store.alert);

  const dispatch = useDispatch();
  const [account, setAccount] = useState<Account>({
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    if (name === "login") {
      setAccount((prev) => ({
        ...prev,
        email: value,
      }));
    } else if (name === "password") {
      setAccount((prev) => ({
        ...prev,
        password: value,
      }));
    }
  };

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAccount({
      email: "",
      password: "",
    });
    const { email, password } = account;
    dispatch(userActions.login(email, password));
  };
  return { account, handleChange, handleSubmit, alert };
};
