import { FC, useMemo } from "react";
import { Icons } from "components/common";
import { Modal } from "components/template";
import { useGaleryLogic } from "../hooks";
import { EachFoto } from "./eachFoto";
import "../style/galery.scss";

const { OutLineClose, PlusIcon, MinusIcon } = Icons;
interface IModalGalery {
  images: Array<string>;
  showModal: boolean;
  handleToggle?: () => void;
}

export const ModalGalery: FC<IModalGalery> = ({
  showModal,
  handleToggle,
  images,
}) => {
  const {
    zoom,
    activeImages,
    position,
    handleSetActive,
    handleSetZoom,
    mouseMove,
    mouseStart,
    mouseStop,
  } = useGaleryLogic(images);

  const fotos = useMemo(
    () =>
      images
        ? images.map((el, index) => {
            return (
              <EachFoto
                key={index}
                {...{
                  img: el,
                  index,
                  active: activeImages,
                  onClick: handleSetActive,
                }}
              />
            );
          })
        : null,
    [images, handleSetActive, activeImages]
  );

  return (
    <Modal
      show={showModal}
      close={handleToggle}
      className="modalGalery"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="modalGalery__wrapper">
        <div className="modalGalery__zoom">
          <span>
            <PlusIcon
              className="modalGalery__icon"
              onClick={() => handleSetZoom("increment")}
            />
            <MinusIcon
              className="modalGalery__icon"
              onClick={() => handleSetZoom("decrement")}
            />
          </span>
          <OutLineClose className="modalGalery__icon" onClick={handleToggle} />
        </div>
        <div className="modalGalery__imageBox">
          <img
            src={images[activeImages]}
            alt="product"
            className="modalGalery__image"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: `${position.x}px ${position.y}px`,
            }}
            onTouchStart={mouseStart}
            onTouchMove={mouseMove}
            onTouchEnd={mouseStop}
          />
        </div>

        <div
          className={`modalGalery__more ${
            images.length > 1 && "modalGalery__more--active"
          }`}
          style={{ width: `${images && images.length * 100}%` }}
        >
          <div className="modalGalery__border"></div>

          {fotos}
        </div>
      </div>
    </Modal>
  );
};
