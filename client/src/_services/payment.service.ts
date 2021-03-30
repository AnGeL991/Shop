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
    deliveryCost: number
  ) {
    const paymentItems = this.prepareOrderToPayment(items);
    return await client("create-payment-intent", {
      items: paymentItems,
      email,
      deliveryCost,
    });
  }

  static setAdressPayment(data: Delivery) {
    return addPaymentAdress(data);
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

  static setPaymentStatus(status: IPaymentStatus) {
    return addPaymentStatus(status);
  }
  static sendOrder(payment: PaymentState) {
    return client("/order", payment);
  }
}
