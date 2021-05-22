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

    const emailTemplate = emailData(email, 'd-4dbe1c1ab00d42f1b52c811996dbe2e5', {
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
    const emailTemplate = emailData(email, 'd-ad4f7d79c63543adbc0b27af420729a2', { link: `http://localhost:3000/users/activate/${token}` });
    await sgMail
      .send(emailTemplate)
      .then(() => {
        return ResponseProcessor(res).sendResult({ message: `Email has been sent to ${email}` });
      })
      .catch((err) => {
        return ResponseProcessor(res).sendError({ error: err.message });
      });
  }
  static async sendEmailWithResetPasswordLink(res: Response, email: string, token: string) {
    const emailTemplate = emailData(email, 'd-002550186d054d5db7ca70e2c419e3ec', { link: `http://localhost:3000/users/reset/${token}` });
    await sgMail
      .send(emailTemplate)
      .then((sent) => {
        return ResponseProcessor(res).sendResult({ message: `Email has been sent to ${email}. Follow the instruction to activate your account` });
      })
      .catch((err) => {
        return ResponseProcessor(res).sendError({ error: err.message });
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
