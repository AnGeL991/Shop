import { client } from "_api";
import { userActions } from "store/user";
import { useFormLogic } from "_hooks";

export const useFacebookLogic = () => {
  const { onSubmit } = useFormLogic();

  const responseFacebook = async (response: any) => {
    const { userID, accessToken } = response;
    const user = await sendFacebookToken(userID, accessToken);
    localStorage.setItem("Token", JSON.stringify({ token: user.token }));
    onSubmit(userActions.loadUser, [user.token]);
  };

  const sendFacebookToken = async (userID: string, accessToken: string) => {
    return await client("users/facebook-login", { userID, accessToken });
  };
  return { responseFacebook };
};
