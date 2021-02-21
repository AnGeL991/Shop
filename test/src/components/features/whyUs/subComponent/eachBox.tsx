import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

export const EachBox: FC<Props> = ({ children, title, description }) => {
  return (
    <div className="whyUs__box">
      <header className="whyUs__header">
        {children}
        <h4 className="whyUs__boxTitle">{title}</h4>
      </header>
      <div>
        <p className="whyUs__description">{description}</p>
      </div>
    </div>
  );
};
