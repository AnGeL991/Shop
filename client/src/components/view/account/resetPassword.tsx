import { FC } from "react";
import { MatchProps } from "components/interfaces";
import { ResetPasswordForm } from "components/template";

export const ResetPassword: FC<MatchProps> = ({ match }) => {
  return (
    <section className="page">
      <ResetPasswordForm token={match.params.token} />
    </section>
  );
};
