import { FC } from "react";
import { Button } from "components/common";
import './style.scss';

interface IEmpty {
    text:string
}

export const Empty: FC<IEmpty> = ({text}) => {
  return (
    <div className='empty'>
      <div className='empty__description'>
        <span>{text}</span>
        <span>Check our shop and choose something.</span>
      </div>
      <Button className='empty__button'>Our Shop</Button>
    </div>
  );
};
