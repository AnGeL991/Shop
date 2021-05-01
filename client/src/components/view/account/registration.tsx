import { FC } from 'react';
import { Header } from 'components/common';
import { RegisterForm } from 'components/template';


export const Registration: FC = () => {
  return (
    <section>
      <Header title="Create Account" />
      <article>
        <RegisterForm />
      </article>
    </section>
  );
};
