import { FC } from 'react';
import {Icons} from 'components/common';
import { Circle } from './circle';
import { Link } from 'react-router-dom';
import { useWishLogic } from '_hooks';


export const Best: FC = () => {
  const {wishlistLenght} = useWishLogic();
  return (
    <div className="icon">
      <Link to="/wish">
        <Icons.HeartIcon size="28" />
        <Circle amount={wishlistLenght} />
      </Link>
    </div>
  );
};
