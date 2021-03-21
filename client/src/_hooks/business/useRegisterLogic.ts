import { useState, useEffect } from "react";
import { User } from "db";
import { userActions } from "store/user";
import { useFormLogic } from "_hooks";

export const useRegisterLogic = () => {
  const { onSubmit, error } = useFormLogic();

  const [status, setStatus] = useState("no password");

  const [showModal, setShowModal] = useState(false);

  const submit = (user: User) => onSubmit(userActions.register, [user]);

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

  return { status, submit, error, showModal };
};
