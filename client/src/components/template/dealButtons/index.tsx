import { FC } from "react";
import { Icons } from "components/common";
import { Button } from "components/common";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  styleBtn?: string;
  id?: string;
  addToCard?: () => void;
  addToWishList?: () => void;
  addToCompore?: () => void;
};

export const DealButtons: FC<Props> = ({
  className,
  styleBtn,
  id,
  addToCard,
  addToWishList,
  addToCompore,
}) => {
  const { ShoppingCart, EyeIcon, HeartIcon, CopyIcon } = Icons;

  return (
    <div className={className}>
      <Button darkButton smallButton className={styleBtn} onClick={addToCard}>
        <ShoppingCart/>
      </Button>
      <Button darkButton smallButton className={styleBtn}>
        <Link to={`/shop/${id}`}>
          <EyeIcon />
        </Link>
      </Button>
      <Button darkButton smallButton className={styleBtn} onClick={addToWishList}>
        <HeartIcon />
      </Button>
      <Button darkButton smallButton className={styleBtn} onClick={addToCompore}>
        <CopyIcon/>
      </Button>
    </div>
  );
};
