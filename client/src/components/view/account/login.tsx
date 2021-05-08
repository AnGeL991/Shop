import { FC, useLayoutEffect } from "react";
import { Header } from "components/common";
import { LoginForm } from "components/template";
import { MatchProps } from "components/interfaces";
import { useLoginLogic } from "_hooks";

export const Login: FC<MatchProps> = (props) => {
  const { LoginWithCognito } = useLoginLogic();
  useLayoutEffect(() => {
    if (props.location.search.split("?code=")[1]) {
      LoginWithCognito(props);
    }
  }, [props.location.search.split("?code=")[1]]);

  return (
    <section className="height">
      <Header title="Log in" />
      <LoginForm />
    </section>
  );
};
