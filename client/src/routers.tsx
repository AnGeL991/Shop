import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import {
  PageNoFound,
  Shop,
  Contact,
  Login,
  Registration,
  Wish,
  Media,
  AboutUs,
  Account,
  Order,
  ProductPage,
  Checkout,
  Delivery,
  Payment,
  Home,
} from "./components/view";
import { PrivateRoute } from "components/routing/privateRoute";

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/shop", component: Shop },
  { exact: true, path: "/shop/:id", component: ProductPage },
  { exact: true, path: "/wish", component: Wish },
  { exact: true, path: "/order", component: Order },
  { exact: true, path: "/media", component: Media },
  { exact: true, path: "/contact", component: Contact },
  { exact: true, path: "/login", component: Login },
  { exact: true, path: "/registration", component: Registration },
  { exact: true, path: "/AboutUs", component: AboutUs },
  { exact: true, path: "/product", component: ProductPage },
  { exact: true, path: "/Checkout", component: Checkout },
  { exact: true, path: "/checkout/delivery", component: Delivery },
  { exact: true, path: "/checkout/payment", component: Payment },
  { exact: false, path: "*", component: PageNoFound },
];

const router = routes.map((el, index) => (
  <Route key={index} exact={el.exact} path={el.path} component={el.component} />
));

export const Routers: FC = () => {
  return (
    <Switch>
      <PrivateRoute path="/myAccount" component={Account} />
      {router}
    </Switch>
  );
};
