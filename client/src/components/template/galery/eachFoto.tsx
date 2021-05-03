import { FC } from "react";
interface IEachFoto {
  image: string;
  text: string;
}

export const EachFoto: FC<IEachFoto> = ({ image, text }) => {
  return (
    <div className="galery__foto">
      <img src={image} alt="galery" className='galery__img' />
      <div className="galery__bg">
        <p className="galery__text">{text}</p>
      </div>
    </div>
  );
};
