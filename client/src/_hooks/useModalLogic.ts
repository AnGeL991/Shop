import {MouseEvent, useState} from 'react';

export const useModalLogic = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const StopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return { handleToggleModal, showModal, StopPropagation };
};