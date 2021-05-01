import { FC } from "react";
import { GalerySlider, DealButtons,ModalProduct } from "components/template";
import { Stars } from "components/common";
import { Inventory } from "components/interfaces";
import { useProductBoxLogic } from "_hooks";

type DealProps = {
  item: Inventory;
  translate: number;
  transition: number;
  onMouseMove?: () => void;
};

export const Slide: FC<DealProps> = ({
  item,
  translate,
  transition,
  onMouseMove,
}) => {
  const { price, title, description } = item;
  const {
    addProductToOrder,
    addProductToWish,
    handleToggleModal,
    discountPrice,
    images,
    arrayOfStars,
    showModal,
    loading,
    wish,
  } = useProductBoxLogic(item);

  const modal = showModal && (
    <ModalProduct
      showModal={showModal}
      loading={loading || wish.loading}
      handleToggle={handleToggleModal}
    />
  );

  return (
    <>
    {modal}
    <div
      className="deal__wrapper"
      style={{
        transform: `translateX(-${translate}%)`,
        transition: `all linear  ${transition}s`,
      }}
      onClick={onMouseMove}
      onMouseEnter={onMouseMove}
      onMouseLeave={onMouseMove}
    >
      <div className="deal__context">
        <div className="deal__images">
          <GalerySlider data={images} padding={0} className='deal' />
        </div>
        <div className="deal__info">
          <h4 className="deal__title">{title}</h4>
          <Stars productId={item._id} arrayOfStars={arrayOfStars} />
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
    </>
  );
};
