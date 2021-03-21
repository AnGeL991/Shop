import { CSSProperties, FC } from 'react';
import './header.scss';

type HeaderProps = {
  title: string;
  className?:string;
  style?:CSSProperties;
};

export const Header: FC<HeaderProps> = ({ title,className,style }) => {
  return (
    <header className={`headerPage ${className} `}>
      <h3 className="headerPage__title" style={style}>{title}</h3>
    </header>
  );
};
