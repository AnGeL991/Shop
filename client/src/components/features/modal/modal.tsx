import { FC, ReactNode } from 'react';
import { DarkButton } from 'components/common';
import { useModalLogic } from '_hooks';
import ReactDom from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './modal.scss';

type Props = {
  children: ReactNode;
  show: boolean;
  btn?: string;
  close?: () => void;
  title?: string;
  fullHight?: boolean;
};

export const Modal: FC<Props> = ({
  children,
  show,
  title,
  btn,
  close,
  fullHight,
}) => {
  const { StopPropagation } = useModalLogic();

  const header = title ? (
    <div className="modal__header">
      <AiOutlineClose className="modal__icon" onClick={close} />
      <h4 className="modal__title">{title}</h4>
    </div>
  ) : null;
  const footer = btn ? (
    <div className="modal__footer">
      {btn && <DarkButton onClick={close}>{btn}</DarkButton>}
    </div>
  ) : null;

  return ReactDom.createPortal(
    <div
      className={`modal 
    ${show && 'modal--show'}
    ${fullHight && 'modal__content--full'}
    `}
      onClick={close}
    >
      <div
        className={`modal__content 
        ${show && 'modal__content--show'}`}
        onClick={StopPropagation}
      >
        {header}
        <div className="modal__body">{children}</div>
        {footer}
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  );
};
