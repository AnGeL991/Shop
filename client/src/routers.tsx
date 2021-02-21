import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  PageNoFound,
  Shop,
  Contact,
  Login,
  Registration,
  Wish,
  Media,
  AboutUs,
  MyAccount
} from './components/pages';
import Home from 'components/pages/home/home';
import Order from 'components/pages/order/order';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: false, path: '/shop', component: Shop },
  { exact: false, path: '/wish', component: Wish },
  { exact: false, path: '/order', component: Order },
  { exact: false, path: '/media', component: Media },
  { exact: false, path: '/contact', component: Contact },
  { exact: false, path: '/login', component: Login },
  { exact: false, path: '/registration', component: Registration },
  { exact: false, path: '/AboutUs', component: AboutUs },
  { exact: false, path: '/myAccount', component: MyAccount },
  { exact: false, path: '*', component: PageNoFound },
];

const router = routes.map((el, index) => (
  <Route key={index} exact={el.exact} path={el.path} component={el.component} />
));

export const Routers: FC = () => <Switch>{router}</Switch>;
