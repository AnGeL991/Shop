import { config } from './config';

export const emailData = (email: string, templateId: string, dataToTemplate: object) => {
  const data = {
    from: config.sqMail.EMAIL_FROM,
    to: email,
    templateId,
    dynamicTemplateData: dataToTemplate
  };
  return data;
};
