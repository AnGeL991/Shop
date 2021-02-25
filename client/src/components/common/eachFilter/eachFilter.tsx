import { FC, ReactNode } from 'react';
import { ReadMore } from 'components/common';

type Props = {
  children: ReactNode;
  title: string;
};

export const EachFilter: FC<Props> = ({ children, title }) => {
  return (
    <div>
      <ReadMore title={title} className="filter">
        {children}
      </ReadMore>
    </div>
  );
};
