import * as yup from "yup";

export const contactSchema = yup.object().shape({
  firstName: yup.string().required("To pole jest wymagane"),
  email: yup
    .string()
    .email("Email posiada nie własciwą konstrukcję - @gmail.com")
    .required("To pole jest wymagane"),
  subject: yup.string().required("Proszę wpisać temat wiadomości"),
  message: yup.string().required("Proszę wpisać treść wiadomości"),
});

export const registerSchema = yup.object().shape({
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
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("To pole jest wymagane")
    .email("Email posiada nie własciwą konstrukcję - @gmail.com"),
  password: yup
    .string()
    .min(6, "Hasło musi się składać z minimum 6 znaków")
    .required("To pole jest wymagane"),
});
