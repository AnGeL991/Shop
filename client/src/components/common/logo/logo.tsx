import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

type Props = {
  onClick: () => void;
};

export const Logo: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="logo">
      <Link to="/">M-tibis-bis</Link>
    </div>
  );
};
