import { client } from "_api";
import { useGetState } from "_hooks";
export const usePersonalDateLogic = (firstName?: string) => {
  const {
    user: { token },
  } = useGetState();
  const onSubmit = async (updates: any) => {
    if (token) {
      await client("users/account", { updates }, token, {
        method: "PUT",
      });
    }
  };

  let name = "";
  let surName = "";
  if (firstName) {
    name = firstName;
    surName = "";
    const data = firstName.split(" ");
    if (data.length > 1) {
      name = data[0];
      surName = data[1];
    }
  }

  return { onSubmit, name, surName };
};
