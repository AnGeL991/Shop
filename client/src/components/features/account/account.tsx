import { FunctionComponent } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useToggleClick } from '_hooks';

export const Account: FunctionComponent = () => {
  const { open, handleToggle } = useToggleClick();

  return (
    <>
      <div onClick={handleToggle} className="icon icon__bottom">
        <VscAccount size="28" />
      </div>
      <div className={`header__account ${open && 'header__account--active'}`}>
        <ul className="list">
          <li className="item">
            <Link to="/login">My Accont</Link>
          </li>
          <li className="item">
            <Link to="/order">Checkout</Link>
          </li>
          <li className="item">
            <Link to="/registration">Sign on</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
