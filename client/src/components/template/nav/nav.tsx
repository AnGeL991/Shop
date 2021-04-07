import { FC } from "react";
import { EachLink } from "components/common";
import { nav } from "db";

export const Nav: FC = () => {

  const filter = (
    <nav className='nav'>
      <ul className="nav__list">
        {nav.map((el) => (
          <EachLink key={el.name} {...el} />
        ))}
      </ul>
    </nav>
  );
  return <section className='nav__section'>{filter}</section>;
};
