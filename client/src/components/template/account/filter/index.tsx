import { FC } from "react";
import {
  PersonalData,
  AccountAside,
  WatchedItems,
  UserOrders,
  Status,
  ResetPassword,
} from "components/template";
import { useAccountLogic } from "../hook/useAccountLogic";
import "../style/myAccount.scss";

export const AccountFilter: FC = () => {
  const { data, handleOpenOption, openOption } = useAccountLogic();
  const { accountStatus } = data;

  return (
    <section className="myAccount">
      <Status status={accountStatus} />
      <AccountAside
        openOption={openOption}
        handleOpenOption={handleOpenOption}
      />
      <PersonalData active={openOption.profile} {...data} />
      <UserOrders active={openOption.orders} />
      <WatchedItems active={openOption.wish} />
      <ResetPassword active={openOption.reset} />
    </section>
  );
};
