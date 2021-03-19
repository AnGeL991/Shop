import { FC } from 'react';
import './header.scss';

type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="headerPage">
      <h3 className="headerPage__title">{title}</h3>
    </header>
  );
};
