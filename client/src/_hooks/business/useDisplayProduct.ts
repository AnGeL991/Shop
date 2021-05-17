import { useState } from "react";
import { Inventory, SortOption } from "store/inventory";
import { useGetState } from "_hooks";

export const useDisplayProduct = (amountOnPage: number) => {
  const {
    inventory: { data, search, price, sort, category },
  } = useGetState();

  const [slice, setSlice] = useState(0);
  const [displayWay, setDisplayWay] = useState({
    list: true,
    gallery: false,
  });
  const handleChangeDisplayWay = (option: number) => {
    switch (option) {
      case 1: {
        setDisplayWay({
          list: true,
          gallery: false,
        });
        break;
      }
      case 2: {
        setDisplayWay({
          list: false,
          gallery: true,
        });
        break;
      }
      default: {
        break;
      }
    }
  };
  const handleSetSlice = (amount: number) => setSlice(amount - 1);

  const productById = (id: string) => {
    return data.find((el) => el._id === id);
  };

  const productByCategory = (category: string) =>
    data.filter((el) => {
      return el.category === category;
    });

  let displayArray: Array<Inventory> = data;

  const dealProduct = data.filter((el) => el.discount !== 0);

  const recomendedProduct = data.filter((el) => el);

  const sortArray = (sort: string) => {
    switch (sort) {
      case SortOption.DEFAULT: {
        return displayArray;
      }
      case SortOption.TO_HIGHT_PRICE: {
        displayArray.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      }
      case SortOption.TO_LOW_PRICE: {
        displayArray.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
      }
      case SortOption.POPULAR_SORT: {
        return displayArray;
      }
      case SortOption.NEW_PRODUCTS: {
        return displayArray;
      }
      default:
        break;
    }
  };

  if (category !== "") {
    displayArray = displayArray.filter((el) => el.category === category);
  }
  if (search !== "") {
    displayArray = displayArray.filter((el) => el.title === search);
  }
  if (price !== 0) {
    displayArray = displayArray.filter((el) => el.price >= price);
  }
  if (sort !== "") {
    sortArray(sort);
  }

  const sliceArray = amountOnPage
    ? displayArray.slice(slice === 0 ? 0 : slice * amountOnPage)
    : displayArray;
  const firstProductShowed = slice * amountOnPage + 1;
  const lastProductShowed =
    (slice + 1) * amountOnPage < displayArray.length
      ? (slice + 1) * amountOnPage
      : displayArray.length;
  return {
    displayArray,
    sliceArray,
    dealProduct,
    recomendedProduct,
    displayWay,
    category,
    firstProductShowed,
    lastProductShowed,
    productById,
    handleSetSlice,
    productByCategory,
    handleChangeDisplayWay,
  };
};
