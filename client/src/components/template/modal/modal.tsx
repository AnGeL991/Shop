import { CSSProperties, FC, ReactNode, useMemo } from "react";
import { Button } from "components/common";
import { useModalLogic } from "_hooks";
import ReactDom from "react-dom";
import "./style/modal.scss";

type Props = {
  children: ReactNode;
  show: boolean;
  btn?: string;
  close?: () => void;
  title?: string;
  fullHight?: boolean;
  style?: CSSProperties;
  className?: string;
};

export const Modal: FC<Props> = ({
  children,
  show,
  title,
  btn,
  close,
  fullHight,
  style,
  className,
}) => {
  const { StopPropagation } = useModalLogic();

  const header = useMemo(
    () =>
      title ? (
        <div className="modal__header">
          <h4 className="modal__title">{title}</h4>
        </div>
      ) : null,
    [title]
  );

  const footer = useMemo(
    () =>
      btn && (
        <div className="modal__footer">
          <Button darkButton onClick={close}>
            {btn}
          </Button>
        </div>
      ),
    [btn, close]
  );

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
        ${show && "modal__content--show"}
        ${className}
        `}
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
