import { FC } from 'react';
import { useFilterValue } from '_hooks';
type Props = {
  name: string;
  className?: string;
};

export const EachCategory: FC<Props> = ({ name, className }) => {
  const { handleSetCategory } = useFilterValue();

  return (
    <li>
      <p
        className={`${className}__category`}
        onClick={() => handleSetCategory(name)}
      >
        {name}
      </p>
    </li>
  );
};
