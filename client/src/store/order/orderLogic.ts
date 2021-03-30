import { AnyAction } from "redux";
import { Inventory } from "store/inventory";
import { OrderState } from "./types";

class OrderPrepare {
  static getTotal(items: Inventory[]) {
    return items.reduce((total, item) => {
      return (
        total + item.amount * (item.price - (item.price * item.discount) / 100)
      );
    }, 0);
  }

  static check(items: Inventory[], id: string) {
    return items.some((el) => el._id === id);
  }

  static productLogic(items: Inventory[], amount: number, id: string) {
    const item = items.map((el) =>
      el._id === id ? { ...el, amount: el.amount ? el.amount + amount : 1 } : el
    );
    const product = items.filter((el) => el._id === id)[0];

    const price =
      (product.price - (product.price * product.discount) / 100) *
      (amount === 0 ? product.amount : amount);

    return { item, price, product };
  }

  static discountPrice(price: number, discount: number) {
    return price - (price * discount) / 100;
  }
}

export default class OrderReduxProcesses {
  static addToOrder(state: OrderState, action: AnyAction) {
    const { items, count } = state.order;
    const { _id, price, amount, discount } = action.payload;
    const total = OrderPrepare.getTotal(items);
    const some = OrderPrepare.check(items, _id);
    const dicountPrice = OrderPrepare.discountPrice(price, discount);
    if (some) {
      const { item } = OrderPrepare.productLogic(items, amount, _id);
      return {
        loading: false,
        order: {
          count: count + amount,
          items: [...item],
          totalPrice: total + dicountPrice,
        },
      };
    } else
      return {
        ...state,
        loading: false,
        order: {
          count: count + amount,
          items: [...items, action.payload],
          totalPrice: total + dicountPrice,
        },
      };
  }

  static updateOrderAmount(state: OrderState, action: AnyAction) {
    const { items, count } = state.order;
    const { id, amount } = action.payload;
    const total = OrderPrepare.getTotal(items);
    const { item, price } = OrderPrepare.productLogic(items, amount, id);
    return {
      order: {
        count: count + amount,
        items: [...item],
        totalPrice: total + price,
      },
    };
  }

  static removeOrder(state: OrderState, action: AnyAction) {
    const { items, count } = state.order;
    const { product, price } = OrderPrepare.productLogic(
      items,
      0,
      action.payload
    );
    const total = OrderPrepare.getTotal(items);
    return {
      order: {
        ...state.order,
        count: count - product.amount,
        items: items.filter((el) => el._id !== action.payload),
        totalPrice: total - price,
      },
    };
  }
}
