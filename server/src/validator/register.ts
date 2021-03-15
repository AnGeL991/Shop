import Validator from 'validator';
import isEmpty from 'is-empty';

interface IRegister {
  email: string;
  firstName: string;
  password: string;
  regulations: string;
}

export const validateRegisterInput = (data: IRegister) => {
  let errors = {
    email: '',
    firstName: '',
    password: '',
    regulations: ''
  };

  data.email = !isEmpty(data.email) ? data.email : '';
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.regulations = !isEmpty(data.regulations) ? data.regulations : '';

  if (Validator.isEmail(data.email)) {
    errors.email = 'Email field is required';
  }
  if (Validator.isEmail(data.password)) {
    errors.email = 'Password field is required';
  }
  if (Validator.isEmail(data.firstName)) {
    errors.email = 'FirstName field is required';
  }
  if (Validator.isEmail(data.regulations)) {
    errors.email = 'Regulations field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
