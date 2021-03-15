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

const reducer: Reducer<OrderState> = (state = initialState, action) => {
  const { items, count, totalPrice } = state.data;
  const total = items.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);
  
  switch (action.type) {
    case OrderActionTypes.START_LOAD_ORDER: {
      return { ...state, loading: true };
    }
    case OrderActionTypes.END_LOAD_ORDER: {
      return {
        ...state,
        loading: false,
        data: {
          ...action.payload,
        },
      };
    }
    case OrderActionTypes.ERROR_LOAD_ORDER: {
      return { ...state, loading: false, errors: action.payload };
    }
    case OrderActionTypes.ADD_TO_ORDER: {
      const { _id, price } = action.payload;
      const some = items.some((el) => el._id === _id);

      if (some) {
        const item = items.map((el) => ({
          ...el,
          amount: el.amount ? el.amount + 1 : 10,
        }));
        return {
          data: {
            ...state.data,
            count: count + 1,
            items: [...item],
            totalPrice: total + price,
          },
        };
      }
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          count: count + 1,
          items: [...items, action.payload],
          totalPrice: total + price,
        },
      };
    }
    case OrderActionTypes.UPDATE_ORDER_AMOUNT:
      const { id, amount } = action.payload;
      const item = items.map((el) =>
        el._id === id
          ? {
              ...el,
              amount: el.amount ? el.amount + amount : 1,
            }
          : el
      );
      const price = item.map((el) => el.price);
      return {
        data: {
          count: count + amount,
          items: [...item],
          totalPrice: total + price[0] * amount,
        },
      };
    case OrderActionTypes.REMOVE_FROM_ORDER:
      const countProduct = items.map((el) =>
        el._id === action.payload ? el.amount : 1
      );
      const itemPrice = items.map((el) =>
        el._id === action.payload ? el.price : 0
      );
      return {
        data: {
          ...state.data,
          count: count - countProduct[0],
          items: items.filter((el) => el._id !== action.payload),
          totalPrice: totalPrice - countProduct[0] * itemPrice[0],
        },
      };

    default: {
      return state;
    }
  }
};
export { reducer as orderReducer };
