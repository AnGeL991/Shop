/* eslint-disable react-hooks/exhaustive-deps */
import { useGetState, useFormLogic } from "_hooks";
import { client } from "_api";
import { userActions } from "store/user";
import { useEffect } from "react";

export const useWishLogic = () => {
  const { userWish } = userActions;
  const { onSubmit } = useFormLogic();
  const {
    user: {
      data: { wishId },
      wish,
    },
  } = useGetState();

  const fetchWish = async () => {
    if (wishId) {
      const res = await client("product/get", { wishId });
      if (res) {
        onSubmit(userWish, [res.result]);
      }
    }
  };
  useEffect(() => {
    fetchWish();
  }, []);

  return { wish, fetchWish };
};
