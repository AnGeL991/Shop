import { FC, useState, useRef } from 'react';
import { Button, Field, FieldChecked, ReadMore } from 'components/common';
import {registerField, User} from 'db/db';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  firstName: yup.string().required('To pole jest wymagane'),
  lastName: yup.string().required('To pole jest wymagane'),
  email: yup.string().email('Email posiada nie własciwą konstrukcję - @gmail.com').required('To pole jest wymagane'),
  password: yup
    .string()
    .min(6, 'Hasło musi się składać z minimum 6 znaków')
    .required('To pole jest wymagane'),
  passwordConfirmation: yup
    .string()
    .required('To pole jest wymagane')
    .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
  regulations: yup
    .boolean()
    .required('to pole jest wymagane')
    .oneOf([true], 'Musisz zaakceptować zasady'),
  newsletter: yup.boolean(),
});


export const RegisterForm: FC = () => {
  const [status, setStatus] = useState('no password');
  const progressRef = useRef(null);

  const { register, handleSubmit, errors, } = useForm({
    resolver: yupResolver(schema),
  });

  ///pobrac wartosc z passwordconfirm która znajduje sie w register

  const registerProgress = <div className="register__progress">
    <p>
      Min. 6 characters, including two types: (capital letter, small
      letter, number, special character)
  </p>
    <div className="register__strength">
      Password strength: <span>{status}</span>
      <progress
        className="register__progressBar"
        value="0"
        ref={progressRef}
      ></progress>
    </div>
  </div>

  const fields = registerField.map(el => {
    switch (el.name) {
      case 'password':
        const confirm = <div key={el.name}><Field {...el} reference={register} error={errors[el.name]} /> {registerProgress} </div>
        return confirm
      case 'firstName':
      case 'lastName':
      case 'passwordConfirmation':
      case 'email':
        return <Field key={el.name} {...el} reference={register} error={errors[el.name]} />
      case 'select all':
      case 'regulations':
      case 'newsletter':
        return <FieldChecked key={el.name} name={el.name} type={el.type}><ReadMore title={el.name} className='checkedRead'><p>{el.children}</p></ReadMore></FieldChecked>
      default:
        return <p key={el.name}>Coś poszło nie tak</p>;
    }
  })

  const onSubmit = (user: User) => {
    console.log(user);
  };

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="register__fildset">
        {fields}
        <Button className="register__button">Create Account</Button>
      </fieldset>
    </form>
  )
}