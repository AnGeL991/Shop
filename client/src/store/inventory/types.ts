export interface Inventory {
  _id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  star: number;
  amount: number;
  time?: string;
  discount: number;
  description?: string;
  tags?: Array<string>;
  images: Array<string>;
}

export enum InventoryActionTypes {
  START_REQUEST = "START_REQUEST",
  END_REQUEST = "END_REQUEST",
  ERROR_REQUEST = "ERROR_REQUEST",
  SET_MIN_PRICE = "SET_MIN_PRICE",
  SET_MAX_PRICE = "SET_MAX_PRICE",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_CATEGORY = "SET_CATEGORY",
  SET_SORT_OPTION = "SET_SORT_OPTION",
  SET_FILTER_PRICE = "SET_FILTER_PRICE",
}

export enum SortOption {
  DEFAULT = "DEFAULT_SORT",
  TO_HIGHT_PRICE = "TO_HIGHT_PRICE",
  TO_LOW_PRICE = "TO_LOW_PRICE",
  POPULAR_SORT = "POPULAR_SORT",
  NEW_PRODUCTS = "NEW_PRODUCTS",
}

export interface InventoryState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
  search: string;
  maxPrice: number;
  minPrice: number;
  category: string;
  sort: string;
  price: number;
}
