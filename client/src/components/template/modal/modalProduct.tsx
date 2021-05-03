/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Spinner } from "components/common";
import { Modal } from "components/template";
import "./style/product.scss";

interface IModalProduct {
  status?: string;
  loading?: boolean;
  showModal: boolean;
  handleToggle: () => void;
}

export const ModalProduct: FC<IModalProduct> = ({
  loading,
  showModal,
  handleToggle,
}) => {
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        handleToggle();
      }, 400);
    }
  }, [loading]);

  return (
    <Modal
      show={showModal}
      close={handleToggle}
      className="productModal"
    >
      <div className="productModal__wrapper">{loading && <Spinner />}</div>
    </Modal>
  );
};
