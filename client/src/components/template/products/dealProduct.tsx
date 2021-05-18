import { FC } from "react";
import { DealButtons, GalerySlick } from "components/template";
import { Stars } from "components/common";
import { Inventory } from "components/interfaces";
import { useProductBoxLogic } from "_hooks";

type DealProps = {
  item: Inventory;
};

export const DealProduct: FC<DealProps> = ({ item }) => {
  const { price, title, description } = item;
  const {
    addProductToOrder,
    addProductToWish,
    discountPrice,
    images,
    arrayOfStars,
  } = useProductBoxLogic(item);
  const galeryData = images.map((el, index) => ({ id: index, image: el }));

  return (
    <div className="deal__wrapper">
      <div className="deal__context">
        <div className="deal__images">
          <GalerySlick data={galeryData} className="deal" />
        </div>
        <div className="deal__info">
          <h4 className="deal__title">{title}</h4>
          <Stars arrayOfStars={arrayOfStars} />
          <div className="deal__priceBox">
            <span className="deal__price"> ${discountPrice.toFixed(2)}</span>
            <span className="deal__oldPrice"> ${price.toFixed(2)}</span>
          </div>
          <p className="deal__description">{description}</p>
          <div className="deal__time">
            <div className="deal__eachTime">
              45
              <span className="deal__times">Days</span>
            </div>
            <div className="deal__eachTime">
              5<span>Hours</span>
            </div>
            <div className="deal__eachTime">
              12
              <span>Mins</span>
            </div>
            <div className="deal__eachTime">
              43
              <span>Secs</span>
            </div>
          </div>
          <DealButtons
            addToCard={addProductToOrder}
            addToWishList={addProductToWish}
            id={item._id}
            className="deal__buttons"
            styleBtn="deal__button"
          />
        </div>
      </div>
    </div>
  );
};
