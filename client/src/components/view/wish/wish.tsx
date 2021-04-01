import { FC } from "react";
import { Header } from "components/common";
import { WishProducts, EmptyWish } from "components/template";
import { useWishLogic } from "_hooks";

export const Wish: FC = () => {
  const { data, removeWish } = useWishLogic();

  if (data.length === 0) {
    return <EmptyWish />;
  }

  return (
    <section className="page">
      <Header title="wishlist" />
      <WishProducts data={data} removeWish={removeWish} />
    </section>
  );
};
