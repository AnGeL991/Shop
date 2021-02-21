import React, { FC } from 'react';
import 'normalize.css';
import 'styles/global.scss';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { MainLayout } from './components/layout';
import { ApplicationState } from 'store';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import {Routers} from './routers';
interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}


const App: FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainLayout>
          <Routers/>
        </MainLayout>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
