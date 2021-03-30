import * as yup from "yup";

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("To pole jest wymagane")
    .email("Email posiada nie własciwą konstrukcję - @gmail.com"),
});

export const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Hasło musi się składać z minimum 6 znaków")
    .required("To pole jest wymagane"),
  passwordConfirmation: yup
    .string()
    .required("To pole jest wymagane")
    .oneOf([yup.ref("password"), null], "Hasła muszą być takie same"),
});
