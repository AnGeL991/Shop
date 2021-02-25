import { Reducer } from 'redux';
import { OrderActionTypes, OrderState } from './types';

export const initialState: OrderState = {
  data: {
    count: 0,
    items: [],
  },
  errors: undefined,
  loading: false,
};

const reducer: Reducer<OrderState> = (state = initialState, action) => {
  const { items, count } = state.data;

  switch (action.type) {
    case OrderActionTypes.START_LOAD_ORDER: {
      return { ...state, loading: true };
    }
    case OrderActionTypes.END_LOAD_ORDER: {
      return { ...state, loading: false, data: action.payload };
    }
    case OrderActionTypes.ERROR_LOAD_ORDER: {
      return { ...state, loading: false, errors: action.payload };
    }
    case OrderActionTypes.ADD_TO_ORDER: {
      const some = items.some((el) => el._id === action.payload._id);
      if (some) {
        const item = items.map((el) => ({
          ...el,
          amount: el.amount ? el.amount + 1 : 10,
        }));
        return {
          data: {
            count: count,
            items: [...item],
          },
        };
      }
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          count: count + 1,
          items: [...items, action.payload],
        },
      };
    }
    case OrderActionTypes.UPDATE_ORDER_AMOUNT:
      console.log(action.payload.id);
      const item = items.map((el) => (el._id === action.payload.id ?{
        ...el,
        amount: el.amount ? el.amount + action.payload.amount : 1,
      }:el));
      return {
        data: {
          ...state.data,
          items: [...item],
        },
      };
    case OrderActionTypes.REMOVE_FROM_ORDER:
      
      return {
        data: {
          ...state.data,
          items: items.filter((el)=> el._id !== action.payload),
        },
      };

    default: {
      return state;
    }
  }
};
export { reducer as orderReducer };
