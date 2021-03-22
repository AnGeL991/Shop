import { useState, ChangeEventHandler } from "react";

export const useCheckedRule = () => {
  const [inputPayment, setInputPayment] = useState({
    transfer: true,
    masterpass: false,
    dotpay: false,
  });
  const [inputRules, setInputRules] = useState({
    select: false,
    regulations: false,
    newsletter: false,
    personal: false,
  });
  const [inputDelivery, setInputDeliver] = useState({
    courier: false,
    own: false,
    payment: true,
  });
  const [inputComment, setInputComment] = useState("");

  const [dataForm, setDataForm] = useState({ private: true, business: false });

  const handleSetData: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    switch (name) {
      case "private": {
        setDataForm({ business: false, private: true });
        break;
      }
      case "business": {
        setDataForm({ business: true, private: false });
        break;
      }
    }
  };

  const handleSetRegulation: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    switch (name) {
      case "select": {
        setInputRules((prev) => ({
          ...prev,
          select: !prev.select,
          regulations: !prev.select,
          newsletter: !prev.select,
          personal: !prev.select,
        }));
        break;
      }
      case "regulations": {
        setInputRules((prev) => ({
          ...prev,
          select: false,
          regulations: !prev.regulations,
        }));
        break;
      }
      case "newsletter": {
        setInputRules((prev) => ({
          ...prev,
          select: false,
          newsletter: !prev.newsletter,
        }));
        break;
      }
      case "personal": {
        setInputRules((prev) => ({
          ...prev,
          select: false,
          personal: !prev.personal,
        }));
        break;
      }
      case "courier": {
        setInputDeliver({
          payment: false,
          courier: true,
          own: false,
        });
        break;
      }
      case "own": {
        setInputDeliver({
          payment: false,
          courier: false,
          own: true,
        });
        break;
      }
      case "payment": {
        setInputDeliver({
          payment: true,
          courier: false,
          own: false,
        });
        break;
      }
      case "transfer": {
        setInputPayment((prev) => ({
          ...prev,
          transfer: true,
          masterpass: false,
          dotpay: false,
        }));
        break;
      }
      case "masterpass": {
        setInputPayment((prev) => ({
          ...prev,
          transfer: false,
          masterpass: true,
          dotpay: false,
        }));
        break;
      }
      case "dotpay": {
        setInputPayment((prev) => ({
          ...prev,
          transfer: false,
          masterpass: false,
          dotpay: true,
        }));
        break;
      }
      default: {
        return;
      }
    }
  };
  const handleSetComment: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.currentTarget;
    setInputComment(value);
  };

  return {
    handleSetRegulation,
    dataForm,
    handleSetData,
    inputComment,
    inputDelivery,
    inputPayment,
    inputRules,
    handleSetComment,
  };
};
