import { FC } from "react";
import {
  PersonalData,
  AccountAside,
  WatchedItems,
  UserOrders,
  Status,
} from "components/template";
import { useAccountLogic } from "../hook/useAccountLogic";
import "../style/myAccount.scss";

export const AccountFilter: FC = () => {
  const { data, handleOpenOption, openOption } = useAccountLogic();
  const { firstName, lastName, email, password,accountStatus } = data;

  return (
    <section className="myAccount">
      <Status status={accountStatus}/>
      <AccountAside
        openOption={openOption}
        handleOpenOption={handleOpenOption}
      />
      <PersonalData
        active={openOption.profile}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
      />
      <UserOrders active={openOption.orders} />
      <WatchedItems active={openOption.wish} />
    </section>
  );
};
