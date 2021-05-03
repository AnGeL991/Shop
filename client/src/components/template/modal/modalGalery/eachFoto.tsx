import { FC } from "react";

interface IEachFoto {
  onClick: (active: number) => void;
  index: number;
  img: string;
  active: number;
}

export const EachFoto: FC<IEachFoto> = ({ onClick, index, img, active }) => {
  return (
    <div
      className="modalGalery__each"
      style={{ transform: `translateX(-${active * 100}%)` }}
      onClick={() => onClick(index)}
    >
      <img src={img} alt="secound foto" className="modalGalery__image" />
    </div>
  );
};
