import { FunctionComponent, ReactNode } from "react";
import { Footer } from "components/layout";
import { MainMenu } from "components/layout";
import "./mainLayout.scss";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  return (
    <section className="mainLayout">
      <MainMenu />
      {children}
      <Footer />
    </section>
  );
};
