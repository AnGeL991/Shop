import { FC,useMemo } from "react";
import {Icons} from 'components/common';
import { Link } from "react-router-dom";
import { useToggleClick } from "_hooks";
import { useAccountLogic } from "_hooks";



// Pages - najwieksze komplnenty serwowane jako jeden

// Templates - ???

// Elements - ??? 

// Common - najmniejsze


export const Account: FC = () => {
  const { open, handleToggle } = useToggleClick();
  const { isAuthenticated, handleLogout } = useAccountLogic();

  const list =  useMemo(
    () =>
      isAuthenticated ? (
         <>
      <li className="item">
        <Link to="/myAccount">My Accont</Link>
      </li>
      <li className="item">
        <Link to="/order">Checkout</Link>
      </li>
      <li className="item" >
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </li>
    </>
      ) : (
          <>
    <li className="item">
        <Link to="/order">Checkout</Link>
      </li>
      <li className="item">
        <Link to="/login">Sign In</Link>
      </li>
      <li className="item">
        <Link to="/registration">Sign up</Link>
      </li>
    </>
      ),
    [isAuthenticated,handleLogout]);

  return (
    <>
      <div onClick={handleToggle} className="icon icon__bottom">
        <Icons.Account size="28" />
      </div>
      <div className={`header__account ${open && "header__account--active"}`}>
        <ul className="list">{list}</ul>
      </div>
    </>
  );
};
