import { FC } from "react";
import { Logo, Search, Best, Support, Delivery } from "components/common";
import {
  MobileNavCategories,
  MobileNav,
  Account,
  Nav,
  NavCategories,
  Basket,
} from "components/template";
import { useGetState } from "_hooks";
import "./style/mainMenu.scss";

interface IMainMenu {
  fixed?: boolean;
}

export const MainMenu: FC<IMainMenu> = ({ fixed }) => {
  const { order } = useGetState();
  return (
    <header className={`header ${fixed && "header--fixed"}`}>
      <div className="header__border">
        <div className="header__top">
          <Logo />
          <Search />
          <div className="header__orderIcons header__orderIcons--mobile">
            <Best />
            <Basket />
          </div>
          <div className="header__supportIcons">
            <Delivery />
            <Support />
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <MobileNavCategories />
        <NavCategories />
        <Nav />
        <div className="header__bottomIcons">
          <MobileNav />
          <Account />
          <div className=" header__orderIcons--desktop">
            <Best />
            <Basket />
            <p className="header__myCart">
              <span className="header__myCartTitle">My cart</span>
              <br />${order.totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
