import { useState, TouchEventHandler, useEffect } from "react";

export const useGaleryLogic = (images: Array<string>) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [activeImages, setActiveImages] = useState(0);

  const handleSetActive = (index: number) => {
    if (images.length > index + 1) {
      console.log(index);
      setActiveImages(index);
    }
    if (images.length === index + 2) {
      console.log(index);
      setActiveImages(0);
    }
  };

  const handleSetZoom = (option: string) => {
    switch (option) {
      case "increment": {
        if (zoom <= 2) {
          setZoom((prev) => prev + 0.2);
        }
        break;
      }
      case "decrement": {
        if (zoom > 1) {
          setZoom((prev) => prev - 0.2);
        }
        break;
      }
    }
  };
  useEffect(() => {
    return () => {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    };
  }, []);

  const mouseMove: TouchEventHandler<HTMLImageElement> = (e) => {
    setPosition((prev) => ({
      x: Math.floor(startPosition.x - e.changedTouches[0].pageX),
      y: Math.floor(startPosition.y - e.changedTouches[0].pageY),
    }));
  };
  const mouseStart: TouchEventHandler<HTMLImageElement> = (e) => {
    setStartPosition({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    });
  };
  const mouseStop: TouchEventHandler<HTMLImageElement> = () => {
    // setPosition({ x: 0, y: 0 });
  };
  return {
    zoom,
    position,
    activeImages,
    handleSetZoom,
    mouseMove,
    mouseStart,
    handleSetActive,
    mouseStop,
  };
};
