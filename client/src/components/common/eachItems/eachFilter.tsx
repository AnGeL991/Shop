import { FC, ReactNode } from 'react';
import { ReadMore } from 'components/common';

type EachFilterProps = {
  children: ReactNode;
  title: string;
};

export const EachFilter: FC<EachFilterProps> = ({ children, title }) => {
  return (
    <div>
      <ReadMore title={title} className="filter">
        {children}
      </ReadMore>
    </div>
  );
};
