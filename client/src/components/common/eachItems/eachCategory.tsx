import { FC } from 'react';
import { useFilterValue } from '_hooks';

type EachCategoryProps = {
  name: string;
  className?: string;
};

export const EachCategory: FC<EachCategoryProps> = ({ name, className }) => {
  const { handleSetCategory } = useFilterValue();

  return (
    <li>
      <a href='/shop'
        className={`${className}__category`}
        onClick={(e)=>handleSetCategory(e,name)}
      >
        {name}
      </a>
    </li>
  );
};
