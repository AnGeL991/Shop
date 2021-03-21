import { useState } from "react";
import { Inventory, SortOption } from "store/inventory";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";

export const useDisplayProduct = (amountOnPage?: number) => {
  const { data, search, price, sort, category } = useSelector(
    (store: ApplicationState) => store.inventory
  );
  const [slice, setSlice] = useState(0);

  const handleSetSlice = (amount: number) => setSlice(amount - 1);
  const productById = (id: string) => data.filter((el) => el._id === id);

  let displayArray: Array<Inventory> = data;

  const dealProduct = data.filter((el) => el.discount !== 0);

  const recomendedProduct = data.filter((el) => el.star >= 3);

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
        return displayArray.sort((a, b) => (a.star < b.star ? 1 : -1));
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
    ? displayArray.slice(
        slice === 0 ? 0 : slice * amountOnPage,
        (slice + 1) * amountOnPage
      )
    : displayArray;

  return {
    displayArray,
    sliceArray,
    dealProduct,
    recomendedProduct,
    productById,
    category,
    handleSetSlice,
  };
};
