import { FC } from "react";
import AWS from "aws-cognito.svg";
import { Modal, AwsLogin, AwsRegister } from "components/template";
import { AwsButton } from "components/common";
import { useModalLogic } from "_hooks";
import "./style/aws.scss";

export const AwsModal: FC = () => {
  const { showModal, handleToggleModal } = useModalLogic();

  return (
    <>
      <AwsButton handleClick={handleToggleModal} icon>
        Use AWS Cognito
      </AwsButton>
      <Modal show={showModal} close={handleToggleModal} className="awsModal">
        <section className="cognito">
          <img src={AWS} alt="AWS LOGO" className="cognito__logo" />
          <AwsLogin />
          <div className="cognito__otherWay">
            <span>Or</span>
          </div>
          <AwsRegister />
        </section>
      </Modal>
    </>
  );
};
