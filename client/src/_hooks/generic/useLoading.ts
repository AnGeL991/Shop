import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useLoading = () => {
  const { inventory, user, order, alert } = useSelector(
    (state: ApplicationState) => state
  );

  const userLoading = user.loading;
  const orderLoading = order.loading;
  const inventoryLoading = inventory.loading;

  return { inventoryLoading, userLoading, orderLoading, alert };
};
