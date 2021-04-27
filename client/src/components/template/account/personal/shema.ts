import * as yup from "yup";

export const personalSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Your name must be at least 3 characters long")
    .required(),
  lastName: yup
    .string()
    .min(3, "Your last name must be at least 3 characters long")
    .required(),
  contact: yup
    .string()
    .min(11, "Your phone number must have 9 numbers")
    .max(11, "Your phone number must have 9 numbers")
    .required("Please use format 999-999-999"),
  adress: yup
    .string()
    .min(3, "Your adress must be at least 3 characters long")
    .required(),
  city: yup
    .string()
    .min(3, "Your city must be at least 3 characters long")
    .required(),
  state: yup
    .string()
    .min(3, "Your state must be at least 3 characters long")
    .required(),
  code: yup
    .string()
    .min(6, "Your Zip-code must be at least 5 characters long")
    .required(),
  country: yup
    .string()
    .min(3, "Your Country must be at least 3 characters long")
    .required(),
});
