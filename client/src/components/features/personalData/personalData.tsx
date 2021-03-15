import { FC } from 'react';
import { EachData } from './subComponent/eachData';
import './personalData.scss';

type Props ={
  firstName?:string ,
  lastName?:string,
  email?:string,
}


export const PersonalData: FC<Props> = ({firstName,lastName,email}) => {
  return (
    <section className="personalData">
      <EachData name="First Name" firstName={firstName} />
      <EachData name="Last Name" firstName={lastName} />
      <EachData name="E-mail" firstName={email} />
      <EachData name="Password" firstName="Markuszewski" type="password" />
    </section>
  );
};
