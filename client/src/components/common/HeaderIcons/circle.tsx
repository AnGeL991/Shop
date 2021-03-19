import { FC } from 'react';
import './headerIcons.scss';

type CircleProps = {
  amount: Number
}
export const Circle: FC<CircleProps> = ({ amount }) => {

  return (
    <div className="circle">
      {amount}
    </div>)
}