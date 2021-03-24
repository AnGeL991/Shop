import { config } from './config';

export const emailData = (email: string, token: string, subject: string, htmlTemplate: (token: string) => string) => {
  const data = {
    from: config.sqMail.EMAIL_FROM,
    to: email,
    subject,
    html: htmlTemplate(token)
  };
  return data;
};
