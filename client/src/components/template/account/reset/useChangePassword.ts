import { useFormLogic, useGetState } from "_hooks";
import { userActions } from "store/user";
export const useChangePassword = () => {
  const {
    user: { token },
  } = useGetState();
  const { onSubmit } = useFormLogic();

  const handleChangePassword = (data: any) => {
    console.log(data);
    onSubmit(userActions.ResetPassword, [data.newPassword, token]);
  };
  return { handleChangePassword };
};
