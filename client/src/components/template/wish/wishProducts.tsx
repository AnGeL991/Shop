import { FC } from "react";
import { WishItem } from "./wishItem";
import { Inventory } from "store/inventory";
import "./style/wishProduct.scss";

interface IWishProducts  {
  data: Array<Inventory>;
  removeWish: (id: string) => void;
};

export const WishProducts: FC<IWishProducts> = ({ data, removeWish }) => {
  const wishes = data.map((el) => (
    <WishItem key={el._id} onClick={removeWish} item={el} />
  ));

  return <section className="wish">{wishes}</section>;
};
