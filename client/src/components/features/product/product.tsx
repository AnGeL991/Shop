import { DarkButton } from 'components/common';
import { FC } from 'react';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import './product.scss';

export const Product: FC = () => {
  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i} className="productBox__star">
      {i <= 3 ? (
        <AiFillStar className="productBox__star productBox__star--active">
          {i}stars
        </AiFillStar>
      ) : (
        <AiFillStar className="productBox__star">{i} stars</AiFillStar>
      )}
    </span>
  ));

  return (
    <section className="product">
      <div className="product__imageBox">
        <div className="product__image">
          <img
            className="product__img"
            src=" http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/1.jpg"
            alt="product"
          />
        </div>
        <div>galery slider</div>
      </div>
      <div className="product__info">
        <h4 className="product__title">Przykladowy tytul</h4>
        <div className="product__stars">
          {stars} <span>(1 customer review)</span>
        </div>
        <div className="product__categories">
          <p className="product__category">Categories:</p>
          <span>jakas kategoria</span>
        </div>
        <div className="product__price">
          <span>$120.00</span>
        </div>
        <div className="product__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus
          similique eum aperiam. Sint id, error quis autem inventore harum
          officiis iste. Dolorem non facilis repellat animi aperiam sit veniam.
        </div>
        <div className="product__warehouse">
          <span>2499 in stock</span>
        </div>
        <div className="product__amountBox">
          <button className="product__amountBtn">-</button>
          <input
            type="text"
            disabled
            value={1}
            className="product__amountInput"
          />
          <button className="product__amountBtn">+</button>
        </div>
        <div>
          <DarkButton className="product__add">Add TO CART</DarkButton>
        </div>
        <div className="product__wishList">
          <AiFillHeart className="product__icon" /> add to WishList
        </div>
        <div className="product__delivery">
          <ul className="product__list">
            <li className="product__item product__item--active">Delivery</li>
            <li className="product__item">Shipping</li>
          </ul>
          <div className="product__itemInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nostrum deserunt dignissimos voluptas, esse magni porro
          </div>
        </div>
      </div>
    </section>
  );
};
