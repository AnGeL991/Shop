import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useFormLogic = () => {
  const dispatch = useDispatch();
  const { type, message } = useSelector(
    (store: ApplicationState) => store.alert
  );

  const onSubmit = (action: any, props: any) => {
    dispatch(action(...props));
  };

  return { onSubmit, type, message };
};
