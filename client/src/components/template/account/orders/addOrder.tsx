import { FC } from "react";
import { Button } from "components/common";
import { useOrdersLogic } from "./useOrdersLogic";
export const AddOrderByNumber: FC = () => {
  const { handleSetOrderId, orderId, findOrder } = useOrdersLogic();
  return (
    <div className="orders__add">
      <span className="orders__description">Add order by id: </span>
      <input
        type="text"
        className="orders__input"
        placeholder="Order id..."
        value={orderId}
        onChange={handleSetOrderId}
      />
      <Button className="orders__button" onClick={findOrder}>
        Add order
      </Button>
    </div>
  );
};
