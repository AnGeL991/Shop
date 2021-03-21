import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const usePaymentsLogic = () => {
  const { isAuthenticated } = useSelector(
    (state: ApplicationState) => state.user
  );

  return { isAuthenticated };
};
