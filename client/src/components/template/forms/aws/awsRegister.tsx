import { FC } from "react";
import { Field, AwsButton } from "components/common";
import { useAwsLogic } from "./hook";
import { cognitoRegister } from "db";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cognitoRegisterSchema } from "../validateSchema";
import "./style/index.scss";

export const AwsRegister: FC = () => {
 const {userRegister} = useAwsLogic();

 const { register, handleSubmit, errors } = useForm({
  resolver: yupResolver(cognitoRegisterSchema),
});

  const cognitoField = cognitoRegister.map((el) => <Field key={el.name} {...el} reference={register}  error={errors[el.name]}  />);
  return (
    <article className="awsForm">
      <form className="awsForm__form" onSubmit={handleSubmit(userRegister)}>
        <legend className="awsForm__legend">Aws Register</legend>
        <fieldset className="awsForm__fieldset">
          <div className="awsForm__description">
            <span>
              Don't have an account ?
              <br /> Sign up now
            </span>
          </div>
          {cognitoField}
          <AwsButton className="awsForm__button">Create account</AwsButton>
        </fieldset>
      </form>
    </article>
  );
};
