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

  let sliceArray = amountOnPage
    ? displayArray.slice(slice * amountOnPage, (slice + 1) * amountOnPage)
    : displayArray;

  const dealProduct = data.filter((el) => el.discount !== 0);

  const recomendedProduct = data.filter((el) => el.star >= 3);

  const sortArray = (sort: string) => {
    switch (sort) {
      case SortOption.DEFAULT: {
        return sliceArray;
      }
      case SortOption.TO_HIGHT_PRICE: {
        sliceArray.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      }
      case SortOption.TO_LOW_PRICE: {
        sliceArray.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
      }
      case SortOption.POPULAR_SORT: {
        return sliceArray.sort((a, b) => (a.star < b.star ? 1 : -1));
      }
      case SortOption.NEW_PRODUCTS: {
        return sliceArray;
      }
      default:
        break;
    }
  };

  if (category !== "") {
    sliceArray = sliceArray.filter((el) => el.category === category);
    displayArray = displayArray.filter((el) => el.category === category);
  }
  if (search !== "") {
    sliceArray = sliceArray.filter((el) => el.title === search);
  }
  if (price !== 0) {
    sliceArray = sliceArray.filter((el) => el.price >= price);
  }
  if (sort !== "") {
    sortArray(sort);
  }

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
