import { FC, ReactNode, MouseEvent } from 'react';
import { Button } from 'components/common';
import ReactDom from 'react-dom';
import './modal.scss';


type Props = {
  children: ReactNode;
  show: boolean;
  btn?: string;
  close?: () => void;
  title?: string;
};

export const Modal: FC<Props> = ({ children, show, title, btn, close }) => {

  const StopPropagation = (e: MouseEvent<HTMLDivElement>) => { e.stopPropagation() }


  return ReactDom.createPortal(
    <div className={`modal ${show && 'modal__show'}`}>
      <div className="modal__content" onClick={StopPropagation}>
        <div className="modal__header">
          <h4 className="modal__title">{title}</h4>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          {btn && <Button onClick={close}>{btn}</Button>}
        </div>
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  );
};
