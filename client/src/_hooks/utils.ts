import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const FactoryCallbackAction = (action: any, params: any) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(action(...params));
  }, [dispatch, params, action]);
};
