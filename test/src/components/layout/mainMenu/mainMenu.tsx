import React, { FunctionComponent } from 'react';
import { Logo, Search, Basket, Best } from 'components/common';
import { Categories, Nav, Account } from '../../features';
import './mainMenu.scss';

export const MainMenu: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo onClick={() => console.log('zostałem klikniety')} />
        <Search/>
        <Best onClick={() => console.log('zostałem klikniety')} />
        <Basket  />
      </div>
      <div className="header__bottom">
        <Categories onClick={() => console.log('zostałem klikniety')} />
        <div className="header__bottom__icon">
        <Nav/>
        <Account/>
        </div>
      </div>
    </header>
  );
};
