import { FC, useMemo } from "react";
import { useModalLogic } from "_hooks";
import { EachLink } from "components/common";
import { Modal } from "components/template";
import { categoryNav } from "db";
import "./nav.scss";

export const NavCategories: FC = () => {
  const { showModal, handleToggleModal } = useModalLogic();

  const category = useMemo(
    () => (
      <nav className={`category ${showModal && "category__active"}`}>
        <ul className="category__list">
          {categoryNav.map((el) => (
            <EachLink key={el.name} {...el} className="category" />
          ))}
        </ul>
      </nav>
    ),
    [showModal]
  );

  return (
    <>
      <div className="allCategories" onClick={handleToggleModal}>
        All Categories
      </div>
      <Modal
        style={{ backgroundColor: "rgba(255,255,255,0.6" }}
        show={showModal}
        close={handleToggleModal}
        fullHight
      >
        {category}
      </Modal>
    </>
  );
};
