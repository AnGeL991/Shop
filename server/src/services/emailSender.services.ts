import { Response } from 'express';
import { config } from '../config';
import sgMail from '@sendgrid/mail';
import { IOrder } from '../interfaces/order';
import { prepareProductToOrder, prepareTotalPrice, prepareOrderId, ResponseProcessor } from '../utils';
sgMail.setApiKey(config.sqMail.MAIL_KEY);

export class EmailSender {
  static async sendEmailWithFullfilledOrder(data: IOrder) {
    const { delivery, deliveryCost, products } = data;
    const { email, firstName, surName, street, city, postCode, phone } = delivery;

    const orderId = await prepareOrderId();
    const product = prepareProductToOrder(products);
    const totalPrice = prepareTotalPrice(products);

    const emailTemplate = emailData(email, 'd-75531c57feac454cb1f07207699f2791', {
      personalData: `${firstName} ${surName}`,
      street,
      city,
      postCode,
      email,
      phone,
      currency: 'zł.',
      subtotal: totalPrice.toFixed(2),
      delivery: deliveryCost.cost.toFixed(2),
      product,
      total: (totalPrice + deliveryCost.cost).toFixed(2),
      order: orderId
    });
    await sgMail.send(emailTemplate);
  }
  static async sendEmailWithVerifyAccount(res: Response, email: string, token: string) {
    const emailTemplate = emailData(email, 'd-711a3dbcc82143d09a6739a4613668e1', { link: `http://localhost:3000/users/activate/${token}` });
    await sgMail
      .send(emailTemplate)
      .then(() => {
        return ResponseProcessor(res, 200, { message: `Email has been sent to ${email}` });
      })
      .catch((err) => {
        return ResponseProcessor(res, 500, { error: err.message });
      });
  }
  static async sendEmailWithResetPasswordLink(res: Response, email: string, token: string) {
    const emailTemplate = emailData(email, 'd-b7667e8ce86748768bf618a599789f46', { link: `http://localhost:3000/users/reset/${token}` });
    await sgMail
      .send(emailTemplate)
      .then((sent) => {
        return ResponseProcessor(res, 200, { message: `Email has been sent to ${email}. Follow the instruction to activate your account` });
      })
      .catch((err) => {
        return ResponseProcessor(res, 500, { error: err.message });
      });
  }
}

export const emailData = (email: string, templateId: string, dataToTemplate: object) => {
  const data = {
    from: config.sqMail.EMAIL_FROM,
    to: email,
    templateId,
    dynamicTemplateData: dataToTemplate
  };
  return data;
};
