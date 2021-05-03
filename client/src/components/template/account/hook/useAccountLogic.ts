import { useDispatch } from "react-redux";
import { useGetState } from "_hooks";
import { userActions } from "store/user";
import { useState } from "react";

export const useAccountLogic = () => {
  const [openOption, setOpenOption] = useState({
    profile: true,
    orders: false,
    wish: false,
    reset: false,
  });
  const {
    user: { data, isAuthenticated },
  } = useGetState();

  const handleOpenOption = (option: string) => {
    switch (option) {
      case "profile": {
        setOpenOption({
          profile: true,
          orders: false,
          wish: false,
          reset: false,
        });
        break;
      }
      case "orders": {
        setOpenOption({
          profile: false,
          orders: true,
          wish: false,
          reset: false,
        });
        break;
      }
      case "wish": {
        setOpenOption({
          profile: false,
          orders: false,
          wish: true,
          reset: false,
        });
        break;
      }
      case "reset": {
        setOpenOption({
          profile: false,
          orders: false,
          wish: false,
          reset: true,
        });
      }
    }
  };

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(userActions.userLogout());
  }

  return { data, isAuthenticated, openOption, handleLogout, handleOpenOption };
};
