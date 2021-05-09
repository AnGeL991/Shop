import { useGetState } from "_hooks";
import { usePaymentsLogic } from "_hooks";

export const useSuccessOrder = (stripeId: string) => {
  const { handleConfirmOrder, handleConfirmPayment } = usePaymentsLogic();
  const {
    payment: {
      paymentStatus: { id },
    },
  } = useGetState();
  const changeStatusPayment = () => {
    if (stripeId === id) {
      handleConfirmPayment();
    }
  };
  return { changeStatusPayment, handleConfirmOrder };
};
