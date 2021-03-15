import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ApplicationState } from "store";

interface PrivateRouteProps extends RouteProps {
  component: any;
  children: any;
  data?: string;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { data, component: Component, children, ...rest } = props;

  const { isAuthenticated } = useSelector(
    (store: ApplicationState) => store.user
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          Component ? (
            <Component {...props} />
          ) : (
            children
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
