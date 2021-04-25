/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useGetState, useFormLogic } from "_hooks";
import { client } from "_api";
import { userActions } from "store/user";

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

  return { wish };
};
