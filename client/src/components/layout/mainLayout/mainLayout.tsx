import { FunctionComponent, ReactNode } from 'react';
import { Footer } from '../footer/Footer';
import { MainMenu } from '../mainMenu/mainMenu';
import './mainLayout.scss';
type ComponentProps = {
  children: ReactNode;
};

export const MainLayout: FunctionComponent<ComponentProps> = ({ children }) => {
  return (
    <section className='mainLayout'>
      <MainMenu />
      {children}
      <Footer />
    </section>
  );
};
