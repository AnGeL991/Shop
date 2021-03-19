import { FunctionComponent } from "react";
import { GoThreeBars } from "react-icons/go";
import { EachLink } from "components/common";
import { Modal } from "components/template";
import { useModalLogic } from "_hooks";
import "./nav.scss";

export const Nav: FunctionComponent = () => {
  const { showModal, handleToggleModal } = useModalLogic();
  const data = [
    { name: "Home", path: "/" },
    {
      name: "Shop",
      path: "/shop",
      subLink: [
        { name: "Product Category", path: "/ProductCategory" },
        { name: "Top Rated Product", path: "/TopRated" },
      ],
    },
    {
      name: "Blog",
      path: "/Blog",
      subLink: [
        { name: "Left SideBar", path: "/LeftSideBar" },
        { name: "Right SideBar", path: "/RightSideBar" },
      ],
    },
    { name: "Media", path: "/media" },
    { name: "ShortCode", path: "/shordCode" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact Us", path: "/contact" },
  ];

  const filter = (
    <nav className={`nav ${showModal && "nav__active"}`}>
      <ul className="nav__list">
        {data.map((el) => (
          <EachLink key={el.name} {...el} />
        ))}
      </ul>
    </nav>
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
