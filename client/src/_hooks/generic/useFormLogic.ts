import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useFormLogic = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((store: ApplicationState) => store.user);

  const onSubmit = (action: any, props: any) => {
    dispatch(action(...props));
  };

  return { onSubmit, error };
};
