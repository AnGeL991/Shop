import { FC } from 'react';
import { securityInfo } from 'db/db';
import './productSecurity.scss';

export const ProductSecurity: FC = () => {
  return (
    <section className="security__wrapper">
      <ul className="security__wrapper">
        {securityInfo.map((item) => (
          <li key={item.title} className="security__info">
            <h3 className="security__title">{item.title}</h3>
            <p className="security__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
