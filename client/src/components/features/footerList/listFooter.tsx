import { FunctionComponent } from 'react';
import { AboutUs, Contact, Help, Policy, Subscribe } from 'components/features';

export const List: FunctionComponent = () => {
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
