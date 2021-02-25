import { FC, MouseEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPlus, HiMinus } from 'react-icons/hi';

type Props = {
  name: string;
  path: string;
  subLink?: Array<{ path: string; name: string }>;
  className?: string;
};

export const EachLink: FC<Props> = ({
  name,
  path,
  subLink,
  className = 'nav',
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle: MouseEventHandler = () => {
    setOpen((prev) => !prev);
  };

  const icon = open ? (
    <HiMinus onClick={handleToggle} className="nav__icon" />
  ) : (
    <HiPlus onClick={handleToggle} className="nav__icon" />
  );

  const subLinks = subLink
    ? subLink.map((el) => (
        <li className={`${className}__subLink`} value={el.name} key={el.name}>
          <Link to={el.path}>{el.name}</Link>
        </li>
      ))
    : null;

  const eachLink = !subLink ? (
    <Link to={path}>{name}</Link>
  ) : (
    <ul className={`${className}__list`}>
      <li className={`${className}__sub`}>
        <Link to={path}>{name}</Link>
        {icon}
      </li>
      {open && subLinks}
    </ul>
  );

  return <li className={`${className}__link`}>{eachLink}</li>;
};
