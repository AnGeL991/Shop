import { FC } from "react";
import { Logo, Search, Basket, Best } from "components/common";
import { NavCategories, Nav, Account } from "../../template";
import "./mainMenu.scss";

export const MainMenu: FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <Search />
        <Best />
        <Basket />
      </div>
      <div className="header__bottom">
        <NavCategories />
        <div className="header__bottom__icon">
          <Nav />
          <Account />
        </div>
      </div>
    </header>
  );
};
