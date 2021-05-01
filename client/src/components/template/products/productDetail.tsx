import { FC, useMemo } from "react";
import { Button, Stars, Icons } from "components/common";
import { Inventory } from "store/inventory";
import { ImageSlider, Sale, ModalProduct } from "components/template";
import { useProductPageLogic,useProductBoxLogic } from "_hooks";
import "./style/productDetail.scss";

type ProductPageProps = {
  product: Inventory;
};

export const ProductDetail: FC<ProductPageProps> = ({ product }) => {
  const {
    amount,
    activeInfo,
    handleDecremnet,
    handleIncrement,
    HandleSetActiveInfo,
    currentPrice,
  } = useProductPageLogic(product);
  const {
    addProductToOrder,
    addProductToWish,
    arrayOfStars,
    showModal,
    handleToggleModal,
    loading,
    wish
  } = useProductBoxLogic(product);;

  const { discount, price, images, title, category, description } = product;

  const productPrice = useMemo(
    () =>
      discount !== 0 ? (
        <>
          <span>${currentPrice.toFixed(2)}</span>
          <span className="product__oldPrice">${price.toFixed(2)}</span>
        </>
      ) : (
        <span>${currentPrice.toFixed(2)}</span>
      ),
    [discount, currentPrice, price]
  );

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
      <section className="product">
        <article className="product__imageBox">
          <div>
            <ImageSlider
              data={images}
              classImage="product__images"
              classSlide="product__slide"
              opacity={1}
              big
            />
          </div>
        </article>
        <article className="product__info">
          <h4 className="product__title">{title}</h4>
          <div className="product__stars">
            <Stars arrayOfStars={arrayOfStars} />
            <span>({arrayOfStars.length} customer review)</span>
          </div>
          <div className="product__categories">
            <p className="product__category">Categories:</p>
            <span>{category.toUpperCase()}</span>
          </div>
          <div className="product__price">{productPrice}</div>
          <div className="product__description">{description}</div>
          <div className="product__warehouse">
            <span>2499 in stock</span>
          </div>
          <div className="product__amountBox">
            <button
              disabled={amount <= 1}
              name="decrement"
              className="product__amountBtn"
              onClick={handleDecremnet}
            >
              -
            </button>
            <input
              type="text"
              disabled
              value={amount}
              className="product__amountInput"
            />
            <button
              name="increment"
              className="product__amountBtn"
              onClick={handleIncrement}
            >
              +
            </button>
            <Button
              darkButton
              className="product__add"
              onClick={addProductToOrder}
            >
              Add TO CART
            </Button>
          </div>

          <div className="product__wishList" onClick={addProductToWish}>
            <Icons.HeartIcon className="product__icon" /> add to WishList
          </div>
          <div className="product__delivery">
            <ul className="product__list">
              <li
                title="delivery"
                className={`product__item 
            ${activeInfo === "delivery" ? "product__item--active" : null}`}
                onClick={HandleSetActiveInfo}
              >
                Delivery
              </li>
              <li
                title="shipping"
                className={`product__item 
            ${activeInfo === "shipping" ? "product__item--active" : null}`}
                onClick={HandleSetActiveInfo}
              >
                Shipping
              </li>
              <li
                title="deal"
                className={`product__item 
            ${activeInfo === "deal" ? "product__item--active" : null}`}
                onClick={HandleSetActiveInfo}
              >
                Today's Deal
              </li>
            </ul>
            <div className="product__itemBox">
              <div
                className={`product__itemInfo ${
                  activeInfo === "delivery" ? "product__itemInfo--active" : null
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus nostrum deserunt dignissimos voluptas, esse magni
                porro
              </div>
              <div
                className={`product__itemInfo ${
                  activeInfo === "shipping" ? "product__itemInfo--active" : null
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus nostrum deserunt dignissimos voluptas, esse magni
                porro Voluptatibus nostrum deserunt dignissimos voluptas, esse
                magni porro
              </div>
              <div
                className={`product__itemInfo ${
                  activeInfo === "deal" ? "product__itemInfo--active" : null
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus nostrum deserunt dignissimos voluptas, esse magni
                porro Voluptatibus nostrum deserunt dignissimos voluptas, esse
                magni porro Voluptatibus nostrum deserunt dignissimos voluptas,
                esse magni porro
              </div>
            </div>
          </div>
        </article>
        <article className="product__sale">
          <Sale />
        </article>
      </section>
    </>
  );
};
