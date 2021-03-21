import { ChangeEventHandler, useState } from "react";
import { useFormLogic } from "_hooks";
import { privatePerson, delivery, business } from "db";

export const useAdressLogic = () => {
  const { onSubmit } = useFormLogic();

  const [inputChecked, setInputChecked] = useState({
    transfer: true,
    courier: false,
    own: false,
  });

  const [dataForm, setDataForm] = useState({ private: true, business: false });

  const fieldsData = dataForm.private ? privatePerson : business;
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

  const handleSetDelivery: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    switch (name) {
      case "transfer": {
        setInputChecked({
          transfer: true,
          courier: false,
          own: false,
        });
        break;
      }
      case "courier": {
        setInputChecked({
          transfer: false,
          courier: true,
          own: false,
        });
        break;
      }
      case "own": {
        setInputChecked({
          transfer: false,
          courier: false,
          own: true,
        });
        break;
      }
    }
  };

  return {
    delivery,
    inputChecked,
    handleSetDelivery,
    handleSetData,
    dataForm,
    fieldsData,
  };
};
