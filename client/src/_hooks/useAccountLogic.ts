import { ApplicationState } from "store";
import { useSelector } from "react-redux";

export const useAccountLogic = () => {
  const { data, isAuthenticated } = useSelector(
    (store: ApplicationState) => store.user
  );
  const user = data[0];
  return { user, isAuthenticated };
};
