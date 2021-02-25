import { FunctionComponent } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Circle } from '../circle/circle';
import { Link } from 'react-router-dom';
type Props = {
  onClick: () => void;
};

export const Best: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <div className="icon">
      <Link to="/wish">
        <AiOutlineHeart size="28" />
        <Circle amount={0} />
      </Link>
    </div>
  );
};
