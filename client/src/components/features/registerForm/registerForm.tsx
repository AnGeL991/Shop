import { FC, useRef } from 'react';
import { Button, Field, FieldChecked, ReadMore } from 'components/common';
import { registerField } from 'db/db';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterLogic } from '_hooks';
import {Modal} from 'components/features';


export const RegisterForm: FC = () => {
  const { status, schema,onSubmit,alert,showModal} = useRegisterLogic();

  const progressRef = useRef(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
 
  const modalAlert = (
    <Modal show={showModal}>
      <p className='register__alert'>{alert.message}</p>
    </Modal>
  )
  

  const registerProgress = (
    <div className="register__progress">
      <p>
        Min. 6 characters, including two types: (capital letter, small letter,
        number, special character)
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
  );

  const fields = registerField.map((el) => {
    switch (el.name) {
      case 'password':
        const confirm = (
          <div key={el.name}>
            <Field {...el} reference={register} error={errors[el.name]} />{' '}
            {registerProgress}{' '}
          </div>
        );
        return confirm;
      case 'firstName':
      case 'lastName':
      case 'passwordConfirmation':
      case 'email':
        return (
          <Field
            key={el.name}
            {...el}
            reference={register}
            error={errors[el.name]}
          />
        );
      case 'select all':
      case 'regulations':
      case 'newsletter':
        return (
          <FieldChecked key={el.name} name={el.name} type={el.type} reference={register} error={errors[el.name]}
          >
            <ReadMore title={el.name} className="checkedRead">
              <p>{el.children}</p>
            </ReadMore>
          </FieldChecked>
        );
      default:
        return <p key={el.name}>Coś poszło nie tak</p>;
    }
  });

  return (
    <>
    {modalAlert}
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="register__fildset">
        {fields}
        <Button className="register__button">Create Account</Button>
      </fieldset>
    </form>
    </>
  );
};
