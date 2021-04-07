import { FC } from "react";
import { Icons } from "components/common";
import { useStarLogic } from "_hooks";
import "./style/star.scss";

type Props = {
  activeStart: number;
};

export const Stars: FC<Props> = ({ activeStart }) => {
  const { star, hoverStar, handleHoverStar, handleSetStar } = useStarLogic();
  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i} className="star">
      {i <= ((star || hoverStar) === 0 ? activeStart : star || hoverStar) ? (
        <Icons.Star
          className="star star--active"
          onClick={() => handleSetStar(i)}
          onMouseEnter={() => handleHoverStar(i)}
          onMouseLeave={() => {
            handleHoverStar(0);
          }}
        >
          {i}stars
        </Icons.Star>
      ) : (
        <Icons.Star
          className="star"
          onClick={() => handleSetStar(i)}
          onMouseEnter={() => handleHoverStar(i)}
          onMouseLeave={() => {
            handleHoverStar(0);
          }}
        >
          {i} stars
        </Icons.Star>
      )}
    </span>
  ));
  return <>{stars}</>;
};
