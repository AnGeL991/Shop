/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
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
  const handleSetOrderId = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.currentTarget.value);
  };
  const fetchOrder = async () => {
    const res = await client("order/get", { ordersId });
    if (res) {
      onSubmit(userOrders, [res.result]);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const amountOfProduct = orders
    ? orders.map((el) =>
        el.products.reduce((total, item) => {
          return total + item.amount;
        }, 0)
      )
    : [];

  const findOrder = async () => {
    if (token && orderId) {
      try {
        const result = await User.findOrder(orderId, token);
        onSubmit(userOrders, [result]);
      } catch (err) {
        onSubmit(AlertAction.error, [err.message]);
      }
      setOrderId("");
    }
  };

  return {
    orders,
    amountOfProduct,
    orderId,
    handleSetOrderId,
    findOrder,
    fetchOrder,
  };
};
