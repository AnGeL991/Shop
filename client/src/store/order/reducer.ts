import { Reducer } from "redux";
import { OrderActionTypes, OrderState } from "./types";

export const initialState: OrderState = {
  data: {
    count: 0,
    items: [],
    totalPrice: 0,
  },
  errors: undefined,
  loading: false,
};

const {
  START_LOAD_ORDER,
  END_LOAD_ORDER,
  ERROR_LOAD_ORDER,
  ADD_TO_ORDER_REQUEST,
  ADD_TO_ORDER,
  UPDATE_ORDER_AMOUNT,
  REMOVE_FROM_ORDER,
} = OrderActionTypes;

const reducer: Reducer<OrderState> = (state = initialState, action) => {
  const { items, count, totalPrice } = state.data;
  const total = items.reduce((total, item) => {
    return (
      total + item.amount * (item.price - (item.price * item.discount) / 100)
    );
  }, 0);

  switch (action.type) {
    case START_LOAD_ORDER: {
      return { ...state, loading: true };
    }
    case END_LOAD_ORDER: {
      return {
        ...state,
        loading: false,
        data: {
          ...action.payload,
        },
      };
    }
    case ERROR_LOAD_ORDER: {
      return { ...state, loading: false, errors: action.payload };
    }
    case ADD_TO_ORDER_REQUEST: {
      return { ...state, loading: true };
    }
    case ADD_TO_ORDER: {
      const { _id, price, amount, discount } = action.payload;
      const some = items.some((el) => el._id === _id);
      const dicountPrice = price - (price * discount) / 100;
      if (!some) {
        localStorage.setItem(
          "Order",
          JSON.stringify([...items, action.payload])
        );
      }
      if (some) {
        const item = items.map((el) =>
          el._id === _id
            ? {
                ...el,
                amount: el.amount ? el.amount + amount : 1,
              }
            : el
        );
        return {
          loading: false,
          data: {
            ...state.data,
            count: count + amount,
            items: [...item],
            totalPrice: total + dicountPrice,
          },
        };
      }
      return {
        ...state,
        loading: false,
        data: {
          count: count + amount,
          items: [...items, action.payload],
          totalPrice: total + price - (price * discount) / 100,
        },
      };
    }
    case UPDATE_ORDER_AMOUNT:
      const { id, amount } = action.payload;
      const item = items.map((el) =>
        el._id === id
          ? {
              ...el,
              amount: el.amount ? el.amount + amount : 1,
            }
          : el
      );
      const price = item.map((el) => el.price - (el.price * el.discount) / 100);
      return {
        data: {
          count: count + amount,
          items: [...item],
          totalPrice: total + price[0] * amount,
        },
      };
    case REMOVE_FROM_ORDER:
      const product = items.filter((el) => el._id === action.payload);
      const productPrice = product.reduce((total, item) => {
        return (
          total +
          item.amount * (item.price - (item.price * item.discount) / 100)
        );
      }, 0);
      return {
        data: {
          ...state.data,
          count: count - product[0].amount,
          items: items.filter((el) => el._id !== action.payload),
          totalPrice: totalPrice - productPrice,
        },
      };

    default: {
      return state;
    }
  }
};
export { reducer as OrderReducer };
