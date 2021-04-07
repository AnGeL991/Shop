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
  static getAmount(items: Array<Inventory>) {
    return items.reduce((amount, item) => {
      return amount + item.amount;
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
  static loadOrders(state: OrderState, action: AnyAction) {
    const amount = OrderPrepare.getAmount(action.payload);
    const total = OrderPrepare.getTotal(action.payload);

    return {
      ...state,
      loading: false,
      count: amount,
      items: [...action.payload],
      totalPrice: total,
    };
  }

  static addToOrder(state: OrderState, action: AnyAction) {
    const { items, count } = state;
    const { _id, price, amount, discount } = action.payload;
    const total = OrderPrepare.getTotal(items);
    const some = OrderPrepare.check(items, _id);
    const dicountPrice = OrderPrepare.discountPrice(price, discount);
    if (some) {
      const { item } = OrderPrepare.productLogic(items, amount, _id);
      localStorage.setItem("Order", JSON.stringify([...item]));
      return {
        loading: false,
        count: count + amount,
        items: [...item],
        totalPrice: total + dicountPrice,
      };
    } else
      localStorage.setItem("Order", JSON.stringify([...items, action.payload]));
    return {
      ...state,
      loading: false,
      count: count + amount,
      items: [...items, action.payload],
      totalPrice: total + dicountPrice,
    };
  }

  static updateOrderAmount(state: OrderState, action: AnyAction) {
    const { items, count } = state;
    const { id, amount } = action.payload;
    const total = OrderPrepare.getTotal(items);
    const { item, price } = OrderPrepare.productLogic(items, amount, id);
    localStorage.setItem("Order", JSON.stringify([...item]));
    return {
      ...state,
      count: count + amount,
      items: [...item],
      totalPrice: total + price,
    };
  }

  static removeOrder(state: OrderState, action: AnyAction) {
    const { items, count } = state;
    const { product, price } = OrderPrepare.productLogic(
      items,
      0,
      action.payload
    );
    const total = OrderPrepare.getTotal(items);
    const item = items.filter((el) => el._id !== action.payload);
    localStorage.setItem("Order", JSON.stringify([...item]));
    return {
      ...state,
      count: count - product.amount,
      items: [...item],
      totalPrice: total - price,
    };
  }
}
