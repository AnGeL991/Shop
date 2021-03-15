import { FC } from "react";
import { Header } from "components/common";
import { AccountFilter } from "components/features";
import "./myAccount.scss";

export const MyAccount: FC = () => {
  return (
    <section className="page">
      <Header title="My Account" />
      <AccountFilter />
    </section>
  );
};
