import { FunctionComponent, ReactNode } from "react";
import { Footer, MainMenu } from "components/layout";
import "./style/mainLayout.scss";

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
