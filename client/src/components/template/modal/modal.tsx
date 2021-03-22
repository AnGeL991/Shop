import { CSSProperties, FC, ReactNode } from "react";
import { Button } from "components/common";
import { useModalLogic } from "_hooks";
import ReactDom from "react-dom";
import { Icons } from "components/common";
import "./modal.scss";

type Props = {
  children: ReactNode;
  show: boolean;
  btn?: string;
  close?: () => void;
  title?: string;
  fullHight?: boolean;
  style?: CSSProperties;
};

export const Modal: FC<Props> = ({
  children,
  show,
  title,
  btn,
  close,
  fullHight,
  style,
}) => {
  const { StopPropagation } = useModalLogic();
  const { OutLineClose } = Icons;

  const header = title ? (
    <div className="modal__header">
      <OutLineClose className="modal__icon" onClick={close} />
      <h4 className="modal__title">{title}</h4>
    </div>
  ) : null;
  const footer = btn ? (
    <div className="modal__footer">
      {btn && (
        <Button darkButton onClick={close}>
          {btn}
        </Button>
      )}
    </div>
  ) : null;

  return ReactDom.createPortal(
    <div
      className={`modal 
    ${show && "modal--show"}
    ${fullHight && "modal__content--full"}
    `}
      style={style}
      onClick={close}
    >
      <div
        className={`modal__content 
        ${show && "modal__content--show"}`}
        onClick={StopPropagation}
      >
        {header}
        <div className="modal__body">{children}</div>
        {footer}
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};