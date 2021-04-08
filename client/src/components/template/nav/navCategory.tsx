import { FC, useMemo } from "react";
import { EachLink, Icons } from "components/common";
import { categoryNav } from "db";
import { useToggleClick } from "_hooks";
import "./style/nav.scss";

export const NavCategories: FC = () => {
  const { handleToggle, open } = useToggleClick();

  const category = useMemo(
    () => (
      <nav className={`category  ${open === true ? "category--active" : ""}`}>
        <ul className="category__list">
          {categoryNav.map((el) => (
            <EachLink key={el.name} {...el} className="category" />
          ))}
        </ul>
      </nav>
    ),
    [open]
  );

  return (
    <div className="allCategories__desktop">
      <div className="allCategories" onClick={handleToggle}>
        <Icons.BarsIcon className="allCategories__icon" /> All Categories
      </div>
      <div className="category__desktop">{category}</div>
    </div>
  );
};
