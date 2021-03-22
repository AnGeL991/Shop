import { useFormLogic } from "_hooks";
import { privatePerson, delivery, business } from "db";
import { useCheckedRule } from "_hooks";
import { Delivery, OrderActions } from "store/order";
export const useAdressLogic = () => {
  const { onSubmit } = useFormLogic();
  const submit = (delivery: Delivery) => {
    onSubmit(OrderActions.addAdressToDelivery, [delivery]);
  };
  const {
    dataForm,
    handleSetData,
    inputDelivery,
    handleSetRegulation,
  } = useCheckedRule();

  const fieldsData = dataForm.private ? privatePerson : business;

  return {
    delivery,
    inputDelivery,
    handleSetRegulation,
    handleSetData,
    dataForm,
    fieldsData,
    submit,
  };
};
