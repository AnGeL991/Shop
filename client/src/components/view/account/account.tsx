import { FC } from "react";
import { Header } from "components/common";
import { AccountFilter } from "components/template";

export const Account: FC = () => {
  return (
    <section>
      <Header title="My Account" />
      <AccountFilter />
    </section>
  );
};
