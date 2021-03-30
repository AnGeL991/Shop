import { useState, ChangeEventHandler } from "react";
import { IPaymentInputs, IDeliveryOption } from "components/interfaces";
import { RiMapPinRangeFill } from "react-icons/ri";

export const useChecked = () => {
  const [inputPayment, setInputPayment] = useState<IPaymentInputs>({
    transfer: true,
    delivery: false,
  });

  const [inputRules, setInputRules] = useState({
    select: false,
    regulations: false,
    newsletter: false,
    personal: false,
  });

  const [inputDelivery, setInputDeliver] = useState<IDeliveryOption>({
    courier: false,
    own: false,
    payment: true,
  });

  const [inputComment, setInputComment] = useState("");
  const [error, setError] = useState({ message: "" });
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
  /// wzorzec strategi
  // const maping= {
  //   select:(error,input)=>{
  //   error({ message: "" });
  //   input((prev) => ({
  //     ...prev,
  //     select: !prev.select,
  //     regulations: !prev.select,
  //     newsletter: !prev.select,
  //     personal: !prev.select,
  //   }));
  //   maping['select'](setError,setInputRules)
  // }}

  //  maping['select']();

  const handleSetRegulation: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;

    switch (name) {
      case "select": {
        setError({ message: "" });
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
        setError({ message: "" });
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
        setError({ message: "" });
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
          delivery: false,
        }));
        break;
      }
      case "delivery": {
        setInputPayment((prev) => ({
          ...prev,
          transfer: false,
          delivery: true,
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
    setError,
    error,
  };
};
