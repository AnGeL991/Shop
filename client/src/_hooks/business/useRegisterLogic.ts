import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "db/db";
import { userActions } from "store/user";
import { ApplicationState } from "store";

export const useRegisterLogic = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((store: ApplicationState) => store.user);

  const [status, setStatus] = useState("no password");

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (user: User) => {
    dispatch(userActions.register(user));
  };

  useEffect(() => {
    if (error) {
      setShowModal(true);
    }
  }, [error]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);

  return { status, onSubmit, error, showModal };
};
