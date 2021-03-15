import Validator from 'validator';
import isEmpty from 'is-empty';

interface ILogin {
  email: string;
  password: string;
}

export const ValidationLoginInput = (data: ILogin) => {
  let errors = {
    email: '',
    password: ''
  };

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.email : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
