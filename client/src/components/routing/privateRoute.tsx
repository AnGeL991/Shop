import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ApplicationState } from "store";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  const { isAuthenticated } = useSelector(
    (store: ApplicationState) => store.user
  );

  const RenderProps = useMemo(
    () => (props: any) =>
      isAuthenticated ? (
        Component(<Component {...props} />)
      ) : (
        <Redirect to="/login" />
      ),
    [isAuthenticated, Component]
  );
  return <Route {...rest} render={RenderProps} />;
};
