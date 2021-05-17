import { FC } from "react";
import { Header } from "components/common";
import "./style/wishProduct.scss";

export const EmptyWish: FC = () => {
  return (
    <section>
      <Header title="Wish List" />
      <div className="empty">
        <p> No products added to the wishlist</p>
      </div>
    </section>
  );
};
