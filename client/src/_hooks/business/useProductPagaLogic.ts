import { useState, MouseEventHandler } from "react";
import { useProductBoxLogic } from "_hooks";
import { Inventory } from "store/inventory";

export const useProductPageLogic = (item: Inventory) => {
  const [amount, setAmount] = useState(1);
  const [activeInfo, setActiveInfo] = useState("delivery");

  const { price, discount, image, images } = item;

  item.amount = amount;
  item.images = [...images, image];

  const currentPrice =
    discount !== 0 ? price - (price * discount) / 100 : price;

  const HandleSetActiveInfo: MouseEventHandler<HTMLLIElement> = (e) => {
    setActiveInfo(e.currentTarget.title);
  };
  const handleIncrement = () => {
    setAmount((prev) => prev + 1);
  };
  const handleDecremnet = () => {
    setAmount((prev) => prev - 1);
  };

  const { addProductToOrder, addProductToWish } = useProductBoxLogic(item);

  return {
    handleDecremnet,
    handleIncrement,
    HandleSetActiveInfo,
    addProductToOrder,
    addProductToWish,
    currentPrice,
    activeInfo,
    amount,
  };
};
