import { FunctionComponent, ReactNode } from "react";
import { Footer, MainMenu, Container } from "components/layout";
import { useSetFixed} from '_hooks';
import "./style/mainLayout.scss";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  const {fixed} = useSetFixed();
  return (
    <section className="mainLayout">
      <MainMenu  {...{fixed}}/>
      <Container  {...{fixed}}>{children}</Container>
      <Footer />
    </section>
  );
};
