import { FC, useMemo } from "react";
import { GoThreeBars } from "react-icons/go";
import { EachLink } from "components/common";
import { Modal } from "components/template";
import { useModalLogic } from "_hooks";
import { nav } from "db";
import "./style/nav.scss";

export const Nav: FC = () => {
  const { showModal, handleToggleModal } = useModalLogic();

  const filter = useMemo(
    () => (
      <nav className={`nav ${showModal && "nav__active"}`}>
        <ul className="nav__list">
          {nav.map((el) => (
            <EachLink key={el.name} {...el} />
          ))}
        </ul>
      </nav>
    ),
    [showModal]
  );

  return (
    <>
      <div onClick={handleToggleModal} className="icon__bottom">
        <GoThreeBars color="white" size="28" />
      </div>
      <Modal show={showModal} close={handleToggleModal} fullHight>
        {filter}
      </Modal>
    </>
  );
};
