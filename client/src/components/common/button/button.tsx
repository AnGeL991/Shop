import { FC, ReactNode } from 'react';
import './button.scss';

type Props = {
  children: ReactNode,
  className?: string,
  onClick?: () => void;
}

export const Button: FC<Props> = ({ onClick, children, className }) => {

  return (
    <button className={`button ${className}`} onClick={onClick}>{children}</button>
  )
}
