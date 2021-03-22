import { FC, useRef } from "react";
import { Button, Field, FieldChecked, ReadMore } from "components/common";
import { registerField } from "db";
import { registerSchema } from "_yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterLogic } from "_hooks";
import { Modal } from "components/template";

export const RegisterForm: FC = () => {
  const { status, submit, error, showModal,inputRules,handleSetRegulation } = useRegisterLogic();

  const progressRef = useRef(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const modalAlert = (
    <Modal show={showModal}>
      <p className="register__alert">{error}</p>
    </Modal>
  );

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
      case "password":
        const confirm = (
          <div key={el.name}>
            <Field {...el} reference={register} error={errors[el.name]} />{" "}
            {registerProgress}
          </div>
        );
        return confirm;
      case "firstName":
      case "lastName":
      case "passwordConfirmation":
      case "email":
        return (
          <Field
            key={el.name}
            {...el}
            reference={register}
            error={errors[el.name]}
          />
        );
      case "select":
      case "regulations":
      case "newsletter":
        return (
          <FieldChecked
            key={el.name}
            name={el.name}
            type={el.type}
            reference={register}
            error={errors[el.name]}
            checked={inputRules[el.name]}
            onChange={handleSetRegulation}
          >
            {el.name !== 'select' ? <ReadMore title={el.name} className="checkedRead">
              <p>{el.children}</p>
            </ReadMore> : <p className='register__select'>{el.name} all</p> }
          </FieldChecked>
        );
      default:
        return <p key={el.name}>Coś poszło nie tak</p>;
    }
  });

  return (
    <>
      {modalAlert}
      <form className="register" onSubmit={handleSubmit(submit)}>
        <fieldset className="register__fildset">
          {fields}
          <Button className="register__button">Create Account</Button>
        </fieldset>
      </form>
    </>
  );
};
