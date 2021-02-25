import { FunctionComponent } from 'react';
import './categories.scss';

type Props = {
  onClick: () => void;
};

export const Categories: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="allCategories">
      All Categories
    </div>
  );
};
