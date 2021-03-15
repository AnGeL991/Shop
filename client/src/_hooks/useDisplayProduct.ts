import { Inventory, SortOption } from "store/inventory";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import { actions } from "store/inventory";

export const useDisplayProduct = () => {
  const { data, search, price, sort, category } = useSelector(
    (store: ApplicationState) => store.inventory
  );
  const recommendedProduct = useSelector(actions.getRecommendedProduct);
  let displayArray: Array<Inventory> = data;

  const dealProduct = data.filter((el) => el.discount !== 0);

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
  return { displayArray, recommendedProduct, dealProduct };
};
