import { FC } from "react";
import { GalerySlider } from "components/template";
import { DealButtons, Stars } from "components/common";
import { Inventory } from "components/interface";

type DealProps = {
  item: Inventory;
  translate: number;
  transition: number;
  data: Array<{ id: number; image: string }>;
};

export const Slide: FC<DealProps> = ({ data, item, translate, transition }) => {
  const { price, discount, _id, title, star, description } = item;
  const newPrice = price - (price * discount) / 100;

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
          <Stars activeStart={star} />
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
        <DealButtons className="deal__buttons" styleBtn="deal__button" />
      </div>
    </div>
  );
};
