import { FC } from "react";
import {Icons} from 'components/common';
import "./productBox.scss";

type Props = {
  activeStart: number;
};

export const Stars: FC<Props> = ({ activeStart }) => {

  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i} className="star">
      {i <= activeStart ? (
        <Icons.Star className="star star--active">
          {i}stars
        </Icons.Star>
      ) : (
        <Icons.Star className="star">{i} stars</Icons.Star>
      )}
    </span>
  ));
  return <>{stars}</>;
};
