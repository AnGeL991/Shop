import { FC } from "react";
import { WishItem } from "./wishItem";
import { Inventory } from "store/inventory";
import "./style/wishProduct.scss";

interface IWishProducts  {
  data: Array<Inventory>;
};

export const WishProducts: FC<IWishProducts> = ({ data }) => {
  const wishes = data.map((el) => (
    <WishItem key={el._id} item={el} />
  ));

  return <section className="wish">{wishes}</section>;
};
