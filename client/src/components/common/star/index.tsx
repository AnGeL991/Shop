import { FC, useMemo } from "react";
import { Icons } from "components/common";
import { CommentModal } from "components/template";
import { useStarLogic } from "_hooks";
import "./style/star.scss";

type Props = {
  arrayOfStars?:Array<number>;
  productId?: string;
};

export const Stars: FC<Props> = ({ productId,arrayOfStars }) => {
  const {
    star,
    hoverStar,
    handleHoverStar,
    handleSetStar,
    showModal,
    handleToggleModal,
    average
  } = useStarLogic(arrayOfStars);

  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i} >
      {i <= ((star || hoverStar) === 0 ? average : star || hoverStar) ? (
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

  const newCommentModal = useMemo(
    () =>
      star !== 0 ? (
        <CommentModal
          showModal={showModal}
          star={star}
          id={productId}
          handleToggle={handleToggleModal}
        ></CommentModal>
      ) : null,
    [star, showModal, productId, handleToggleModal]
  );

  return (
    <div className='stars'>
      {stars}
      {newCommentModal}
    </div>
  );
};
