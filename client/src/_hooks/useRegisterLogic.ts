import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "db/db";
import { userActions } from "store/user";
import * as yup from "yup";
import { ApplicationState } from "store";

export const useRegisterLogic = () => {
  const dispatch = useDispatch();
  const alert = useSelector((store: ApplicationState) => store.alert);
  const [status, setStatus] = useState("no password");
  const [showModal, setShowModal] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("To pole jest wymagane"),
    lastName: yup.string().required("To pole jest wymagane"),
    email: yup
      .string()
      .email("Email posiada nie własciwą konstrukcję - @gmail.com")
      .required("To pole jest wymagane"),
    password: yup
      .string()
      .min(6, "Hasło musi się składać z minimum 6 znaków")
      .required("To pole jest wymagane"),
    passwordConfirmation: yup
      .string()
      .required("To pole jest wymagane")
      .oneOf([yup.ref("password"), null], "Hasła muszą być takie same"),
    regulations: yup
      .boolean()
      .required("to pole jest wymagane")
      .oneOf([true], "Musisz zaakceptować zasady"),
    newsletter: yup.boolean(),
  });

  const onSubmit = (user: User) => {
    dispatch(userActions.register(user));
  };
  useEffect(() => {
    if (alert.type === "ALERT_ERROR") {
      setShowModal(true);
    }
  }, [alert]);

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

  return { status, schema, onSubmit, alert, showModal };
};
