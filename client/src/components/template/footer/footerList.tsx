import { FC } from "react";
import { AboutUs, Contact, Help, Policy, Subscribe } from "components/template";

export const List: FC = () => {
  return (
    <div className="footer__list">
      <Contact />
      <AboutUs />
      <Help />
      <Policy />
      <Subscribe />
    </div>
  );
};
