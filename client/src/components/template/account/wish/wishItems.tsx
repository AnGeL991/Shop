import { FC, useMemo } from "react";
import { AccountHeader, Item, Empty } from "components/template";
import { useToggleClick } from "_hooks";
import { useWishLogic } from "./useWishLogic";
import "../style/wish.scss";

interface IWatchedItems {
  active?: boolean;
}

export const WatchedItems: FC<IWatchedItems> = ({ active }) => {
  const { open, handleToggle } = useToggleClick();
  const { wish } = useWishLogic();

  const wishItem = useMemo(
    () => (wish ? wish.map((el) => <Item key={el.title} item={el} />) : []),
    [wish]
  );
  const wishContent =
    wishItem.length > 0 ? wishItem : <Empty text="Your wish list is empty " />;

  return (
    <section className={`wishItems ${active && "wishItems--active"} `}>
      <AccountHeader open={open} handleToggle={handleToggle} text="wish List" />
      <aside
        className={`wishItems__wrapper ${open && "wishItems__wrapper--active"}`}
      >
        {wishContent}
      </aside>
    </section>
  );
};
