import { FC } from "react";
import { WishItem } from "./wishItem";
import { Inventory } from "store/inventory";
import "./wishProducts.scss";


type WishProps ={
  data:Array<Inventory>
  removeWish:(id:string)=>void;
}

export const WishProducts: FC<WishProps> = ({data,removeWish}) => {
   
  const wishes = data.map((el)=>(
    <WishItem key={el._id} onClick={removeWish} item={el}/>
  ))

  return (
    <section className="wish">
      {wishes}
    </section>
  );
};
