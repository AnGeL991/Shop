import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useGetState = () => {
  const { user, cart, payment, inventory, wish, alert } = useSelector(
    (state: ApplicationState) => state
  );

  return { user, cart, payment, inventory, wish, alert };
};
