import { ChangeEventHandler, useState } from "react";
import { useModalLogic } from "_hooks";
import { prepareActiveStar } from "_helpers";

export const useStarLogic = (arrayOfStars?: Array<number>) => {
  const { handleToggleModal, showModal } = useModalLogic();
  const [star, setActiveStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [comment, setComment] = useState("");

  const average = prepareActiveStar(arrayOfStars);

  const handleSetStar = (amount: number) => {
    setActiveStar(amount);
    handleToggleModal();
  };
  const handleHoverStar = (amount: number) => setHoverStar(amount);

  const handleSetComment: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.currentTarget;
    setComment(value);
  };

  return {
    star,
    hoverStar,
    comment,
    showModal,
    average,
    handleSetStar,
    handleHoverStar,
    handleSetComment,
    handleToggleModal,
  };
};
