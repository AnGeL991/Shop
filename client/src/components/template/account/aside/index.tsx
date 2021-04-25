import { FC } from "react";
import { Icons } from "components/common";
const { Account, DeliveryIcon, LetterBomb } = Icons;

interface IAccountAside {
  openOption: { profile: boolean; orders: boolean; wish: boolean };
  handleOpenOption: (option: string) => void;
}

export const AccountAside: FC<IAccountAside> = ({
  openOption,
  handleOpenOption,
}) => {
  return (
    <aside className="myAccount__aside">
      <div
        className={`myAccount__option ${
          openOption.profile && "myAccount__option--active"
        } `}
        onClick={() => handleOpenOption("profile")}
      >
        <Account /> Edit Profile
      </div>
      <div
        className={`myAccount__option ${
          openOption.orders && "myAccount__option--active"
        } `}
        onClick={() => handleOpenOption("orders")}
      >
        <DeliveryIcon />
        Your orders
      </div>
      <div
        className={`myAccount__option ${
          openOption.wish && "myAccount__option--active"
        } `}
        onClick={() => handleOpenOption("wish")}
      >
        <LetterBomb /> Wish Item
      </div>
    </aside>
  );
};
