import { FC } from "react";
import { useGetState } from "_hooks";
import { ModalProduct } from "components/template";

import "./style.scss";

export const Listener: FC = () => {
 
  const {
    cart: { loading },
    wish,
  } = useGetState();

 
   if (loading || wish.loading) {
    return (
      <ModalProduct
        {...{
          showModal: loading || wish.loading,
          loading: loading || wish.loading,
        }}
      />
    );
  } else return null;
};
