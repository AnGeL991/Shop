import { FC } from "react";
import { Header } from "components/common";
import "./style/wishProduct.scss";

export const EmptyWish: FC = () => {
  return (
    <section className="page">
      <Header title="WishList" />
      <div className="empty">
        <p> No products added to the wishlist</p>
      </div>
    </section>
  );
};
