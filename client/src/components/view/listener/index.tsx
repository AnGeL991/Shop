import { FC } from "react";
import { useGetState, useLoading } from "_hooks";
import { Loading, ModalProduct } from "components/template";

import "./style.scss";

export const Listener: FC = () => {
  const { inventoryLoading } = useLoading();
  const {
    cart: { loading },
    wish,
  } = useGetState();
  if (inventoryLoading) {
    return <Loading {...{ active: inventoryLoading }} />;
  } else if (loading || wish.loading) {
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
