import { FC } from "react";
import { Modal } from "components/template";
import './style/alert.scss';
interface ModalAlertProps {
  title: string;
  description: string;
  showModal: boolean;
  handleToggle: () => void;
}

export const ModalAlert: FC<ModalAlertProps> = ({
  title,
  description,
  showModal,
  handleToggle,
}) => {
  return (
    <Modal
      show={showModal}
      close={handleToggle}
      className="alert"
      title={title}
    >
      <p className="alert__success">{description}</p>
    </Modal>
  );
};
