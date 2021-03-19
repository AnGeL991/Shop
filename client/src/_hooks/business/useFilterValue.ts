import { ChangeEvent, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/inventory";
import { ApplicationState } from "store/index";

export const useFilterValue = () => {
  const dispatch = useDispatch();

  const { data, maxPrice, minPrice } = useSelector(
    (store: ApplicationState) => store.inventory
  );

  const handleSetCategory = (e: MouseEvent, name: string) => {
    e.preventDefault();
    dispatch(actions.setCategory(name));
  };

  const price = data.map((el) => el.price);

  const handleSetPrice = () => {
    if (maxPrice === 0 || minPrice === 0) {
      dispatch(actions.setMinPrice(Math.min(...price)));
      dispatch(actions.setMaxPrice(Math.max(...price, 0)));
    }
  };

  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchValue(e.currentTarget.value));
  };

  const handleSetSort = (e: MouseEvent<HTMLSelectElement>) => {
    dispatch(actions.setSortOption(e.currentTarget.value));
  };

  const handleSetFilterPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(actions.setFilterPrice(parseInt(value)));
  };

  return {
    handleSetCategory,
    handleSetPrice,
    handleSetSearch,
    handleSetSort,
    handleSetFilterPrice,
  };
};
