import { FC } from 'react';
import { Tag } from 'components/common';
import { AiFillStar } from 'react-icons/ai';
import { useProductBoxLogic } from '_hooks/useProductBoxLogic';
import { Inventory } from 'store/inventory/types';

import './productBox.scss';

interface Product {
  tags?: Array<string>;
  width?: number;
}

interface propsFromComponent {
  item: Inventory;
}

type Props = propsFromComponent & Product;

export const ProductBox: FC<Props> = ({ width, tags, item }) => {
  const { AddProductToOrder } = useProductBoxLogic(item);

  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i} className="productBox__star">
      {i <= item.star ? (
        <AiFillStar className="productBox__star productBox__star--active">
          {i}stars
        </AiFillStar>
      ) : (
        <AiFillStar className="productBox__star">{i} stars</AiFillStar>
      )}
    </span>
  ));

  const tag = tags ? (
    <div className="productBox__tags">
      {tags.map((el) => (
        <Tag
          key={el}
          name={el}
          className={` productBox__tag productBox__${el}`}
        />
      ))}
    </div>
  ) : null;

  return (
    <div
      className="productBox"
      style={{ width: `${width}%` }}
      onClick={() => AddProductToOrder()}
    >
      <div className="productBox__image">
        <img src={item.image} alt={item.title} className="productBox__img" />
        {tag}
      </div>
      <div className="productBox__info">
        <div>{stars}</div>
        <h5 className="productBox__title">{item.title}</h5>
        <span className="productBox__price">
          <strong>${item.price.toFixed(2)}</strong>
        </span>
      </div>
    </div>
  );
};
