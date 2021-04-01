import { FC } from "react";
import { EachFilter } from "components/common";
import { PersonalData, TrackPackage } from "components/template";
import { useAccountLogic } from "./hook/useAccountLogic";
import './style/myAccount.scss';
export const AccountFilter: FC = () => {
  const { user } = useAccountLogic();
  const { firstName, email, lastName } = user;
  const Role = false;

  return (
    <section className="myAccount__filter">
      <h4 className="myAccount__entryTitle">Witaj z powrotem {firstName} </h4>
      <EachFilter title="Dane osobowe">
        <PersonalData firstName={firstName} lastName={lastName} email={email} />
      </EachFilter>
      <EachFilter title="Twoje zamówienia">twoje zamówienie</EachFilter>
      <EachFilter title="Śledz paczkę">
        <TrackPackage />
      </EachFilter>
      <EachFilter title="Reklamacje"> reklamacja</EachFilter>
      {Role && <EachFilter title="Panel admina"> Panel Admina</EachFilter>}
    </section>
  );
};
