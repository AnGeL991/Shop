import { FC } from "react";
import { EachFilter } from "components/common";
import { PersonalData, TrackPackage } from "components/template";
import { useAccountLogic } from "./hook/useAccountLogic";
import "./style/myAccount.scss";
export const AccountFilter: FC = () => {
  const { data } = useAccountLogic();
  const { firstName, name, lastName, family_name, email } = data;

  return (
    <section className="myAccount__filter">
      <h4 className="myAccount__entryTitle">
        Witaj z powrotem {firstName || name}{" "}
      </h4>
      <EachFilter title="Dane osobowe">
        <PersonalData
          firstName={firstName || name}
          lastName={lastName || family_name}
          email={email}
        />
      </EachFilter>
      <EachFilter title="Twoje zamówienia">twoje zamówienie</EachFilter>
      <EachFilter title="Śledz paczkę">
        <TrackPackage />
      </EachFilter>
      <EachFilter title="Reklamacje"> reklamacja</EachFilter>
    </section>
  );
};
