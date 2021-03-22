import { FC } from "react";
import { Header } from "components/common";
import { AccountFilter } from "components/template";
import "./account.scss";

export const Account: FC = () => {
  return (
    <section className="page">
      <Header title="My Account" />
      <AccountFilter />
    </section>
  );
};