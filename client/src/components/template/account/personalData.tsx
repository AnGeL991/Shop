import { FC } from "react";
import { EachData } from "./eachData";
import { IUser } from "components/interfaces";
import './style/personalData.scss';
export const PersonalData: FC<IUser> = ({ firstName, lastName, email }) => {
  return (
    <section className="personalData">
      <EachData name="First Name" firstName={firstName} />
      <EachData name="Last Name" firstName={lastName} />
      <EachData name="E-mail" firstName={email} />
      <EachData name="Password" firstName="Markuszewski" type="password" />
    </section>
  );
};
