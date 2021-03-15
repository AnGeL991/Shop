import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "components/layout";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { Routers } from "routers";
import { alertAction } from "store/alert";

import "normalize.css";
import "styles/global.scss";

interface MainProps {
  history: History;
}

const App: FC<MainProps> = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen(() => {
      dispatch(alertAction.clear());
    });
  });
  return (
    <ConnectedRouter history={history}>
      <MainLayout>
        <Routers />
      </MainLayout>
    </ConnectedRouter>
  );
};

export default App;
