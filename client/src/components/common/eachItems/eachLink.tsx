import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Icons } from "components/common";
import {useToggleClick} from '_hooks';

type EachLinkProps = {
  name: string;
  path: string;
  subLink?: Array<{ path: string; name: string }>;
  className?: string;
};

export const EachLink: FC<EachLinkProps> = ({
  name,
  path,
  subLink,
  className = "nav",
}) => {
  const {open,handleToggle} = useToggleClick();

  const { PlusIcon, MinusIcon } = Icons;

  const icon = useMemo(()=>
    open ? (
      <MinusIcon onClick={handleToggle} className="nav__icon" />
    ) : (
      <PlusIcon onClick={handleToggle} className="nav__icon" />
    )
  ,[open,handleToggle]) 
  

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
