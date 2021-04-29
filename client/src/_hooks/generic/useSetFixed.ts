import { useState, useEffect } from "react";

export const useSetFixed = () => {
  const [fixed, setFixed] = useState(false);
  function getYPosition() {
    window.onscroll = () => {
      setFixed(window.pageYOffset !== 0);
    };
  }
  useEffect(() => {
    getYPosition();
  });

  return { fixed };
};
