import { FunctionComponent } from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useToggleClick } from "_hooks";
import { useAccountLogic } from "_hooks";

export const Account: FunctionComponent = () => {
  const { open, handleToggle } = useToggleClick();
  const { isAuthenticated } = useAccountLogic();

  const list = isAuthenticated ? (
    <>
      <li className="item">
        <Link to="/myAccount">My Accont</Link>
      </li>
      <li className="item">
        <Link to="/order">Checkout</Link>
      </li>
      <li className="item">
        <Link to="/login">Logout</Link>
      </li>
    </>
  ) : (
    <>
      <li className="item">
        <Link to="/login">My Accont</Link>
      </li>
      <li className="item">
        <Link to="/order">Checkout</Link>
      </li>
      <li className="item">
        <Link to="/registration">Sign on</Link>
      </li>
    </>
  );

  return (
    <>
      <div onClick={handleToggle} className="icon icon__bottom">
        <VscAccount size="28" />
      </div>
      <div className={`header__account ${open && "header__account--active"}`}>
        <ul className="list">{list}</ul>
      </div>
    </>
  );
};
