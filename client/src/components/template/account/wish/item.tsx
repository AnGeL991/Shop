import { FC } from "react";
import { Icons, Button } from "components/common";
import { useProductBoxLogic } from "_hooks";
import { Inventory } from "components/interfaces";
const { EyeIcon, BinIcon } = Icons;
interface IItem {
  item: Inventory;
}

export const Item: FC<IItem> = ({ item }) => {
  const { handleRedirectToProduct, removeProductFromWish } = useProductBoxLogic(
    item
  );
  const { image, title, price, discount } = item;

  return (
    <div className="wishItems__product">
      <div className="wishItems__imageBox">
        <img src={image} className="wishItems__img" alt={title} />
      </div>
      <div className="wishItems__info">
        <h4 className="wishItems__title">{title}</h4>
        <span className="wishItems__price">
          <strong>price:</strong> {price}zł
        </span>
        <span className="wishItems__discount">
          <strong>discount:</strong> {discount}%
        </span>
        <div className="wishItems__buttonBox">
          <Button
            darkButton
            className="wishItems__button"
            onClick={handleRedirectToProduct}
          >
            <EyeIcon className="wishItems__icon" />
          </Button>
          <Button
            darkButton
            className="wishItems__button"
            onClick={removeProductFromWish}
          >
            <BinIcon className="wishItems__icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
