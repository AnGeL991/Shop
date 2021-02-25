import { FC, ReactNode } from 'react';
import './darkButton.scss';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const DarkButton: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`darkButton ${className}`}>
      {children}
    </button>
  );
};
