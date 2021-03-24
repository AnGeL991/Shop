import { FC } from "react";
import { Header } from "components/common";
import {WishProducts} from 'components/template';
import { useWishLogic } from "_hooks";
import "styles/pageStyle/wish.scss";

export const Wish: FC = () => {
  
  const {data,removeWish} = useWishLogic();
  if (data.length === 0) {
    return (
      <section className="page">
        <Header title="WishList" />
        <div className="empty">
          <p> No products added to the wishlist</p>
        </div>
      </section>
    );
  }

  return <section className="page">
    <Header title='wishlist'/>
    <WishProducts data={data} removeWish={removeWish}/>
    </section>;
};
