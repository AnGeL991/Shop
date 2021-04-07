import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useGetState = () => {
  const { user, order, payment, inventory, wish, alert } = useSelector(
    (state: ApplicationState) => state
  );

  return { user, order, payment, inventory, wish, alert };
};
