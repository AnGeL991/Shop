import { FC } from "react";
import { Icons } from "components/common";
import { useStarLogic } from "_hooks";
import "./style/star.scss";


interface IStars {
  arrayOfStars?: Array<number>;
  handleSetStar?: (i: number) => void;
  star?: number;
}

export const Stars: FC<IStars> = ({
  arrayOfStars,
  star = 0,
  handleSetStar,
}) => {
  const handleSet = (i: number) => {
    if (handleSetStar) {
      handleSetStar(i);
    } else return;
  };

  const { average, handleHoverStar, hoverStar } = useStarLogic(arrayOfStars);

  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i}>
      {i <= ((star || hoverStar) === 0 ? average : star || hoverStar) ? (
        <Icons.Star
          className="star star--active"
          name={`${i}`}
          onClick={() => handleSet(i)}
          onMouseEnter={() => handleHoverStar(i)}
          onMouseLeave={() => handleHoverStar(0)}
        >
          {i}stars
        </Icons.Star>
      ) : (
        <Icons.Star
          className="star"
          name={`${i}`}
          onClick={() => handleSet(i)}
          onMouseEnter={() => handleHoverStar(i)}
          onMouseLeave={() => handleHoverStar(0)}
        >
          {i} stars
        </Icons.Star>
      )}
    </span>
  ));
  return (
    <div className="stars">
      {stars}
    </div>
  );
};
