import { FC, useMemo } from "react";
import { Tag, Stars } from "components/common";
import { DealButtons } from "components/template";
import { useProductBoxLogic } from "_hooks";
import { Inventory } from "store/inventory";
import "./style/productBox.scss";

interface IProductBox {
  item: Inventory;
  displayWay?: boolean;
}

export const ProductBox: FC<IProductBox> = ({ item, displayWay = false }) => {
  const {
    arrayOfStars,
    discountPrice,
    addProductToOrder,
    addProductToWish,
    handleRedirectToProduct,
  } = useProductBoxLogic(item);

  const tag = useMemo(
    () =>
      item.tags ? (
        <div
          className={`productBox__tags ${
            displayWay && "productBox__tag--horizontal"
          }`}
        >
          {item.tags.map((el) => (
            <Tag
              key={el}
              name={el === "discount" ? `-${item.discount.toString()}%` : el}
              className={` productBox__tag productBox__${el} `}
            />
          ))}
        </div>
      ) : null,
    [displayWay, item.discount, item.tags]
  );

  const price =
    item.discount !== 0 ? (
      <>
        <span className="productBox__oldPrice">${item.price.toFixed(2)}</span>
        <span>${discountPrice.toFixed(2)}</span>
      </>
    ) : (
      <span>${item.price.toFixed(2)}</span>
    );

  return (
    <div className={`productBox ${displayWay && "productBox--horizontal"}`}>
      <div
        className={`productBox__image ${
          displayWay && "productBox__image--horizontal"
        } `}
      >
        <img
          src={item.image}
          alt={item.title}
          className="productBox__img"
          onClick={handleRedirectToProduct}
        />
        {tag}
        <DealButtons
          addToCard={addProductToOrder}
          id={item._id}
          className={`productBox__buttons ${
            displayWay && "productBox__buttons--horizontal"
          }`}
          styleBtn={`productBox__button ${
            displayWay && "productBox__button--horizontal"
          }`}
          addToWishList={addProductToWish}
        />
        <div className="productBox__hover">
          <span className="productBox__text">See details</span>
        </div>
      </div>
      <div
        className={`productBox__info ${
          displayWay && "productBox__info--horizontal"
        }`}
      >
        <div className="productBox__star--horizontal">
          <Stars arrayOfStars={arrayOfStars} />
          {displayWay && (
            <span className="productBox__comment">
              ({item.comment.length} customer review)
            </span>
          )}
        </div>
        <h5 className="productBox__title">{item.title}</h5>
        {displayWay && (
          <div
            className={`productBox__description   ${
              displayWay && "productBox__description--horizontal"
            }`}
          >
            {item.description}
          </div>
        )}
        <span
          className={`productBox__price ${
            displayWay && "productBox__price--horizontal"
          }`}
        >
          {price}
        </span>
      </div>
    </div>
  );
};
