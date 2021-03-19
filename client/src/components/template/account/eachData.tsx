import { FC } from 'react';
import { Button, Field } from 'components/common';
import { Modal } from 'components/template';
import { useModalLogic } from '_hooks';

type DataProps = {
  name: string;
  firstName?: string;
  type?: string;
};

export const EachData: FC<DataProps> = ({ name, firstName, type = 'text' }) => {
  const { handleToggleModal, showModal } = useModalLogic();

  const editInput =
    type !== 'password' ? (
      <div className="personalData__field">
        <Field name={name} type={type} title={name} />
      </div>
    ) : (
      <div className="personalData__field">
        <Field name={name} type={type} title={name} />
        <Field name="confirmPassword" type={type} title="confirm Password" />
      </div>
    );

  return (
    <>
      <Modal
        show={showModal}
        title="Edytuj"
        btn="Zapisz"
        close={handleToggleModal}
      >
        {editInput}
      </Modal>
      <div className="personalData__wrapper">
        <label className="personalData__label">
          <p>{name}</p>
        </label>
        <input
          className="personalData__input"
          type={type}
          value={firstName}
          disabled
        />
        <div className="personalData__btnBox">
          <Button className="personalData__button" onClick={handleToggleModal}>
            Edytuj
          </Button>
        </div>
      </div>
    </>
  );
};
