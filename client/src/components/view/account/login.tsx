import { FC } from "react";
import { Header } from "components/common";
import { LoginForm } from "components/template";

export const Login: FC = () => {
  return (
    <section>
      <Header title="Log in" />
      <LoginForm />
    </section>
  );
};
