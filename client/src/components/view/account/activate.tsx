import { FC } from "react";
import { MatchProps } from "components/interfaces";
import { Operation, Modal } from "components/template";
import { Button } from "components/common";
import { useLoginLogic } from "_hooks";

export const Activate: FC<MatchProps> = ({ match }) => {
  const { activateAccount, handleToggle, showModal } = useLoginLogic(
    "/",
    match.params.token
  );

  const modalAlert = (
    <Modal
      show={showModal}
      className="alert"
      title="Verified!"
      close={handleToggle}
    >
      <p className="alert__success">
        You have successfull verified the account
      </p>
      <Button className="alert__btn" onClick={handleToggle}>
        Go log in
      </Button>
    </Modal>
  );

  return (
    <section>
      {modalAlert}
      <Operation
        title="Veryfikacja konta"
        description="Hi use the button below to verify your email and start enjoying your account"
        btnText="Verify email"
        onClick={activateAccount}
      />
    </section>
  );
};
