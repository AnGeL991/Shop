import { FC,  } from "react";
import { Tag, Stars } from "components/common";
import { DealButtons, ModalProduct } from "components/template";
import {useProductBoxLogic } from "_hooks";
import { Inventory } from "store/inventory";
import "./style/productBox.scss";

interface IProductBox {
  item: Inventory;
  displayWay?: boolean;
}

export const ProductBox: FC<IProductBox> = ({ item, displayWay = false }) => {
  const {
    addProductToOrder,
    discountPrice,
    addProductToWish,
    arrayOfStars,
    loading,
    showModal,
    wish,
    handleToggleModal
  } = useProductBoxLogic(item);


  const tag = item.tags ? (
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
  ) : null;

  const modal = showModal && (
    <ModalProduct
      showModal={showModal}
      loading={loading || wish.loading}
      handleToggle={handleToggleModal}
    />
  );

  const price = discountPrice ? (
    <>
      <span className="productBox__oldPrice">${item.price.toFixed(2)}</span>
      <span>${discountPrice.toFixed(2)}</span>
    </>
  ) : (
    <span>${item.price.toFixed(2)}</span>
  );

  return (
    <>
      {modal}
      <div className={`productBox ${displayWay && "productBox--horizontal"}`}>
        <div
          className={`productBox__image ${
            displayWay && "productBox__image--horizontal"
          } `}
        >
          <img src={item.image} alt={item.title} className="productBox__img" />
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
        </div>
        <div
          className={`productBox__info ${
            displayWay && "productBox__info--horizontal"
          }`}
        >
          <div className="productBox__star--horizontal">
            <Stars productId={item._id} arrayOfStars={arrayOfStars} />
            {displayWay && (
              <span className="productBox__comment">
                ({item.comment.length} customer review)
              </span>
            )}
          </div>
          <h5 className="productBox__title">{item.title}</h5>
          {displayWay && (
            <div className="productBox__description">{item.description}</div>
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
    </>
  );
};
