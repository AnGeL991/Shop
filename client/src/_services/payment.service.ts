import { Inventory } from "store/inventory";
import {
  PaymentActions,
  Delivery,
  PaymentWay,
  IPaymentStatus,
  PaymentState,
} from "store/payment";
import { client } from "_api";

const {
  addPaymentAdress,
  addDeliveryOption,
  addPaymentComment,
  acceptPaymentRegulation,
  addPaymentStatus,
  addProductPayment,
  addTotalPricePayment,
  addOrderId,
  paymentLoad,
  addDiscount,
} = PaymentActions;

export default class Payment {
  static prepareOrderToPayment(items: Inventory[]) {
    return items.map((el) => {
      return { id: el._id, amount: el.amount };
    });
  }

  static async setPaymentIntent(
    email: string,
    items: Inventory[],
    deliveryCost: number,
    id?: string
  ) {
    const paymentItems = this.prepareOrderToPayment(items);
    return await client("create-payment-intent", {
      items: paymentItems,
      email,
      deliveryCost,
      id,
    });
  }

  static setOrderToPayment(order: Inventory[]) {
    return addProductPayment(order);
  }
  static setTotalPricePayment(totalPrice: number) {
    return addTotalPricePayment(totalPrice);
  }
  static setAdressPayment(adressDelivery: Delivery) {
    return addPaymentAdress(adressDelivery);
  }

  static setDeliveryCos(paymentWay: PaymentWay) {
    return addDeliveryOption(paymentWay);
  }

  static setPaymentComment(comment: string) {
    return addPaymentComment(comment);
  }

  static setRegulation(accept: boolean) {
    return acceptPaymentRegulation(accept);
  }
  static setOrderId(orderId: string | number) {
    return addOrderId(orderId);
  }
  static setPaymentStatus(status: IPaymentStatus) {
    return addPaymentStatus(status);
  }
  static sendOrder(payment: PaymentState) {
    return client("/order", payment);
  }
  static confirmOrder(id: string) {
    return client("/order", { id }, "", { method: "PUT" });
  }
  static setDiscount(discount: number) {
    return addDiscount(discount);
  }
  static loadPayment(state: PaymentState) {
    return (dispatch: Function) => {
      dispatch(paymentLoad(state));
    };
  }
}
