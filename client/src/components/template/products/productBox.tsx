import { FC } from "react";
import { Tag, DealButtons, Stars } from "components/common";
import { useProductBoxLogic } from "_hooks";
import { Inventory } from "store/inventory";
import "./style/productBox.scss";

interface Product {
  width?: number;
}

interface propsFromComponent {
  item: Inventory;
}

type Props = propsFromComponent & Product;

export const ProductBox: FC<Props> = ({ width, item }) => {
  
  const { addProductToOrder, discountPrice,addProductToWish } = useProductBoxLogic(item);

  const tag = item.tags ? (
    <div className="productBox__tags">
      {item.tags.map((el) => (
        <Tag
          key={el}
          name={el === "discount" ? `-${item.discount.toString()}%` : el}
          className={` productBox__tag productBox__${el}`}
        />
      ))}
    </div>
  ) : null;

  const price = discountPrice ? (
    <>
      <span className="productBox__oldPrice">${item.price.toFixed(2)}</span>{" "}
      <span>${discountPrice.toFixed(2)}</span>
    </>
  ) : (
    <span>${item.price.toFixed(2)}</span>
  );


  return (
    <div className="productBox" style={{ width: `${width}%` }}>

      <div className="productBox__image">
        <img src={item.image} alt={item.title} className="productBox__img" />
        {tag}
        <DealButtons
          addToCard={addProductToOrder}
          id={item._id}
          className="productBox__buttons"
          styleBtn="productBox__button"
          addToWishList={addProductToWish}
        />
      </div>
      <div className="productBox__info">
        <div>
          <Stars activeStart={item.star} />
        </div>
        <h5 className="productBox__title">{item.title}</h5>
        <span className="productBox__price">{price}</span>
      </div>
    </div>
  );
};
