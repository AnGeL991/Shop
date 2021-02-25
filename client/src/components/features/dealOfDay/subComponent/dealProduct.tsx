import { FC } from 'react';
import { DarkButton } from 'components/common';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';
import { IoCopySharp } from 'react-icons/io5';
import { GalerySlider } from 'components/features';

type Props = {
  _id: string;
  translate: number;
  transition: number;
  data: Array<{ id: number; image: string }>;
  title: string;
  description: string;
  price: number;
  star: number;
  discount?: number;
};

export const Slide: FC<Props> = ({
  data,
  _id,
  translate,
  transition,
  title,
  price,
  description,
  star,
  discount = 10,
}) => {
  const newPrice = price - (price * discount) / 100;

  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i} className="productBox__star">
      {i <= star ? (
        <AiFillStar className="productBox__star productBox__star--active">
          {i}stars
        </AiFillStar>
      ) : (
        <AiFillStar className="productBox__star">{i} stars</AiFillStar>
      )}
    </span>
  ));

  return (
    <div
      key={_id}
      className="deal__wrapper"
      style={{
        transform: `translateX(-${translate}%)`,
        transition: `all linear  ${transition}s`,
      }}
    >
      <div className="deal__context">
        <GalerySlider data={data} padding={0} />
        <div className="deal__info">
          <h4 className="deal__title">{title}</h4>
          {stars}
          <div>
            <span className="deal__price"> ${newPrice.toFixed(2)}</span>
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
        </div>
        <div className="deal__buttons">
          <DarkButton className="deal__button">
            <FaShoppingCart />
          </DarkButton>
          <DarkButton className="deal__button">
            <ImEye />
          </DarkButton>
          <DarkButton className="deal__button">
            <AiFillHeart />
          </DarkButton>
          <DarkButton className="deal__button">
            <IoCopySharp />
          </DarkButton>
        </div>
      </div>
    </div>
  );
};
