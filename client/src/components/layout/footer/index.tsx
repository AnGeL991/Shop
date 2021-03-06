import { FC } from "react";
import { List, CopyRight } from "components/template";
import "./style/footer.scss";

export const Footer: FC = () => {
  return (
    <section className="footer">
      <List />
      <CopyRight />
    </section>
  );
};
