import { FC, useMemo } from "react";
import { Icons } from "components/common";
import { Link } from "react-router-dom";
import { useToggleClick } from "_hooks";
import { useAccountLogic } from "_hooks";

export const Account: FC = () => {
  const { open, handleToggle, handleClose } = useToggleClick();
  const { isAuthenticated, handleLogout } = useAccountLogic();

  const list = useMemo(
    () =>
      isAuthenticated ? (
        <>
          <li className="item" onClick={handleToggle}>
            <Link to="/myAccount">My Accont</Link>
          </li>
          <li className="item" onClick={handleToggle}>
            <Link to="/order">Checkout</Link>
          </li>
          <li className="item" onClick={handleToggle}>
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="item" onClick={handleToggle}>
            <Link to="/order">Checkout</Link>
          </li>
          <li className="item" onClick={handleToggle}>
            <Link to="/login">Sign In</Link>
          </li>
          <li className="item" onClick={handleToggle}>
            <Link to="/registration">Sign up</Link>
          </li>
        </>
      ),
    [isAuthenticated, handleLogout, handleToggle]
  );

  return (
    <>
      <div onClick={handleToggle} className="icon icon__bottom">
        <Icons.Account size="28" />
      </div>
      <div
        className={`header__account ${open && "header__account--active"}`}
        onMouseLeave={handleClose}
      >
        <ul className="list">{list}</ul>
      </div>
    </>
  );
};
