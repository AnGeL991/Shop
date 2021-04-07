import { useState } from "react";

export const useStarLogic = () => {
  const [star, setActiveStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  const handleSetStar = (amount: number) => setActiveStar(amount);

  const handleHoverStar = (amount: number) => setHoverStar(amount);

  return { star, hoverStar, handleSetStar, handleHoverStar };
};
