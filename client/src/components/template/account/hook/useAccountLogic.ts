import { ApplicationState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "store/user";

export const useAccountLogic = () => {
  const dispatch = useDispatch();

  const { data, isAuthenticated } = useSelector(
    (store: ApplicationState) => store.user
  );
  function handleLogout() {
    dispatch(userActions.userLogout());
  }

  return { data, isAuthenticated, handleLogout };
};
