import { ChangeEvent, useState } from "react";
import { client } from "_api";
import { useGetState, useFormLogic } from "_hooks";
import { userActions } from "store/user";
import { UserApiHandler } from "_services/user.service";
import { AlertAction } from "store/alert";

export const useOrdersLogic = () => {
  const { onSubmit } = useFormLogic();
  const { userOrders } = userActions;
  const {
    user: {
      token,
      data: { ordersId },
      orders,
    },
  } = useGetState();
  const User = new UserApiHandler();
  const [orderId, setOrderId] = useState("");
  const [sortedBy, setSortedBy] = useState({
    date: false,
    status: true,
    orderId: false,
  });
  let sortedOrder = [...orders];
  const handleSetOrderId = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.currentTarget.value);
  };

  const fetchOrder = async () => {
    const res = await client("order/get", { ordersId });
    if (res) {
      onSubmit(userOrders, [res.result]);
    }
  };

  const amountOfProduct = orders
    ? orders.map((el) =>
        el.products.reduce((total, item) => {
          return total + item.amount;
        }, 0)
      )
    : [];

  const handleChangeSorted = (option: string) => {
    switch (option) {
      case "date": {
        setSortedBy(() => ({
          orderId: false,
          status: false,
          date: true,
        }));
        sortedOrder = orders.sort((a, b) => (a.time > b.time ? 1 : -1));
        break;
      }
      case "status": {
        setSortedBy(() => ({
          orderId: false,
          status: true,
          date: false,
        }));
        sortedOrder = orders.sort((a, b) =>
          a.paymentStatus.paid === b.paymentStatus.paid ? 1 : -1
        );
        break;
      }
      case "orderId": {
        setSortedBy(() => ({
          date: false,
          status: false,
          orderId: true,
        }));
        sortedOrder = orders.sort((a, b) =>
          parseInt(a.id.toString(), 10) >= parseInt(b.id.toString(), 10)
            ? 1
            : -1
        );
        break;
      }
    }
  };

  const findOrder = async () => {
    if (token && orderId) {
      try {
        const result = await User.findOrder(orderId, token);
        await User.addOrder(result.order._id, token);
        onSubmit(userOrders, [[result.order]]);
      } catch (err) {
        onSubmit(AlertAction.error, [err.message]);
      }
      setOrderId("");
    }
  };

  return {
    amountOfProduct,
    orderId,
    sortedBy,
    sortedOrder,
    handleChangeSorted,
    handleSetOrderId,
    findOrder,
    fetchOrder,
  };
};
