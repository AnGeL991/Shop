import { FC } from 'react';
import { EachData } from './subComponent/eachData';
import './personalData.scss';

export const PersonalData: FC = () => {
  return (
    <section className="personalData">
      <EachData name="First Name" firstName="Jan" />
      <EachData name="Last Name" firstName="Kowalski" />
      <EachData name="E-mail" firstName="demo@email.pl" />
      <EachData name="Password" firstName="Markuszewski" type="password" />
    </section>
  );
};
