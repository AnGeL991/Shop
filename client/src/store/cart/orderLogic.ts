import { AnyAction } from "redux";
import { Inventory } from "store/inventory";
import { CartState } from "./types";
import { prepareTotalPrice } from "_helpers/utils";
class CartPrepare {
  static getTotal(items: Inventory[]) {
    return prepareTotalPrice(items);
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

export default class CartReduxProcesses {
  static startLoad(state: CartState, action: AnyAction) {
    return { ...state, loading: true, items: [] };
  }
  static loadCart(state: CartState, action: AnyAction) {
    const amount = CartPrepare.getAmount(action.payload);
    const total = CartPrepare.getTotal(action.payload);

    return {
      ...state,
      loading: false,
      count: amount,
      items: [...action.payload],
      totalPrice: total,
    };
  }
  static errorLoad(state: CartState, action: AnyAction) {
    return { ...state, loading: false, errors: action.payload };
  }
  static addRequest(state: CartState, action: AnyAction) {
    return { ...state, loading: true };
  }
  static addToCart(state: CartState, action: AnyAction) {
    const { items, count } = state;
    const { _id, price, amount, discount } = action.payload;
    const total = CartPrepare.getTotal(items);
    const some = CartPrepare.check(items, _id);
    const dicountPrice = CartPrepare.discountPrice(price, discount);
    if (some) {
      const { item } = CartPrepare.productLogic(items, amount, _id);
      localStorage.setItem("Cart", JSON.stringify([...item]));
      return {
        loading: false,
        count: count + amount,
        items: [...item],
        totalPrice: total + dicountPrice,
      };
    } else
      localStorage.setItem("Cart", JSON.stringify([...items, action.payload]));
    return {
      ...state,
      loading: false,
      count: count + amount,
      items: [...items, action.payload],
      totalPrice: total + dicountPrice,
    };
  }
  static addFailure(state: CartState, action: AnyAction) {
    return { ...state, errors: action.payload };
  }

  static updateCartAmount(state: CartState, action: AnyAction) {
    const { items, count } = state;
    const { id, amount } = action.payload;
    const total = CartPrepare.getTotal(items);
    const { item, price } = CartPrepare.productLogic(items, amount, id);
    localStorage.setItem("Cart", JSON.stringify([...item]));
    return {
      ...state,
      count: count + amount,
      items: [...item],
      totalPrice: total + price,
    };
  }

  static removeCart(state: CartState, action: AnyAction) {
    const { items, count } = state;
    const { product, price } = CartPrepare.productLogic(
      items,
      0,
      action.payload
    );
    const total = CartPrepare.getTotal(items);
    const item = items.filter((el) => el._id !== action.payload);
    localStorage.setItem("Cart", JSON.stringify([...item]));
    return {
      ...state,
      count: count - product.amount,
      items: [...item],
      totalPrice: total - price,
    };
  }
  static cleanCart(state: CartState, action: AnyAction) {
    console.log("clean");
    return {
      ...state,
      count: 0,
      items: [],
      totalPrice: 0,
    };
  }
}
