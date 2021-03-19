import { FunctionComponent, ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { MainMenu } from "../mainMenu/mainMenu";
import "./mainLayout.scss";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <section className="mainLayout">
      <MainMenu />
      {children}
      <Footer />
    </section>
  );
};
